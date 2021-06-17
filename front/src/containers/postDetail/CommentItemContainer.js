import { useState } from "react";
import CommentItem from "../../components/postDetail/comment/CommentItem";
import {deleteCommentLikeAPI,postCommentLikeAPI} from "../../libs/api"

const CommentItemContainer = ({comment,postIdx}) => {
    const [commentLikeCount,setCommentLikeCount] = useState(comment.likeCount);
    const [commentIsLike, setCommentIsLike] = useState(comment.isLike);


    const onCommentLikeClick = () => {
        if(commentIsLike){
            deleteCommentLikeAPI(comment.commentIdx);
            setCommentIsLike(false);
            setCommentLikeCount(commentLikeCount-1);
        }else{
            postCommentLikeAPI(comment.commentIdx,postIdx);
            setCommentIsLike(true);
            setCommentLikeCount(commentLikeCount+1);
        }
        // console.log(result)
    };
    return (
        <CommentItem 
            comment={comment} 
            commentLikeCount={commentLikeCount} 
            commentIsLike={commentIsLike}
            onCommentLikeClick={onCommentLikeClick}
        />
    )
}

export default CommentItemContainer;