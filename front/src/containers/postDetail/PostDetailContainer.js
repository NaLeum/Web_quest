import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import Modal from "../../components/postDetail/modal/Modal";
import PostDetail from "../../components/postDetail/PostDetail"
import { getPostDetailAPI, postLikeAPI,deleteLikeAPI, deletePostAPI } from "../../libs/api";

const PostDetailContainer = ({match,history,setCommentCount,commentCount}) => {
    const [postDetailData, setPostDetailData] = useState(null);
    const [isLike,setIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [modalVisible,setModalVisible] = useState(false);
    useEffect(()=>{(
        async()=>{
            try{
                const postResult = await getPostDetailAPI(match.params.postIdx);
                setPostDetailData(postResult);
                setIsLike(postResult.isLike);
                setLikeCount(postResult.likeCount);
                setCommentCount(postResult.commentCount);
                console.log(postResult)
            }catch(e){
                console.error("[FAIL] GET POST DETAIL",e)
            }

        }
    )();
    },[match.params.postIdx]);

    const onLikeClick = () => {
        if(isLike){
            deleteLikeAPI(match.params.postIdx);
            setIsLike(false);
            setLikeCount(likeCount-1);
        }else{
            postLikeAPI(match.params.postIdx);
            setIsLike(true);
            setLikeCount(likeCount+1);
        }
        // console.log(result)
    };

    const onDeletPostClick = () => {
        deletePostAPI(match.params.postIdx);
        history.push("/")
    }

    const onClickModal = () => {
        setModalVisible(!modalVisible);
    }
    const onEditPostClick= () => {
        history.push(`/editpost/${match.params.postIdx}`)
    }
    return(
        postDetailData &&
        <> 
            <PostDetail 
                postDetailData={postDetailData} 
                onLikeClick={onLikeClick} 
                isLike={isLike} 
                likeCount={likeCount} 
                onClickModal={onClickModal}
                commentCount={commentCount}
            />
            {modalVisible && <Modal modalVisible={modalVisible} onClickModal={onClickModal} onDeletPostClick={onDeletPostClick} onEditPostClick={onEditPostClick}/>}
        </>
    )
}

export default withRouter(PostDetailContainer);