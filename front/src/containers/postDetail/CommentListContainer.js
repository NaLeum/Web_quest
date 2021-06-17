import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import CommentList from "../../components/postDetail/comment/CommentList"
import { getCommentListAPI } from "../../libs/api";



const CommentListContainer = ({match}) => {
    const [commentData, setCommentData] = useState([])
    useEffect(()=>{(
        async()=>{
            try{
                const commentResult = await getCommentListAPI(match.params.postIdx);
                setCommentData(commentResult.data);
                // setIsLike(commentResult.isLike);
                // setLikeCount(commentResult.likeCount);
                console.log(commentResult.data)
            }catch(e){
                console.error("[FAIL] GET COMMENT LIST",e)
            }

        }
    )();
    },[match.params.postIdx]);
    return(
        commentData.length !== 0 &&
        <CommentList commentData={commentData} />
    )
}

export default withRouter(CommentListContainer);