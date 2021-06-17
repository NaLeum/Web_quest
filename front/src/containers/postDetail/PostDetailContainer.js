import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import PostDetail from "../../components/postDetail/PostDetail"
import { getPostDetailAPI, postLikeAPI,deleteLikeAPI } from "../../libs/api";

const PostDetailContainer = ({match}) => {
    const [postDetailData, setPostDetailData] = useState(null);
    const [isLike,setIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    useEffect(()=>{(
        async()=>{
            try{
                const result = await getPostDetailAPI(match.params.postIdx);
                setPostDetailData(result);
                setIsLike(result.isLike);
                setLikeCount(result.likeCount);
                console.log(result)
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

    return(
        postDetailData && <PostDetail postDetailData={postDetailData} onLikeClick={onLikeClick} isLike={isLike} likeCount={likeCount}/>
    )
}

export default withRouter(PostDetailContainer);