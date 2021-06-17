import { useState } from "react";
import CommentItem from "../../../components/postDetail/comment/CommentItem";
import {deleteCommentAPI, deleteCommentLikeAPI,getCommentListAPI,postCommentLikeAPI} from "../../../libs/api"

const CommentItemContainer = ({comment,postIdx,setCommentData,setCommentCount,commentCount,reply}) => {
    const [commentLikeCount,setCommentLikeCount] = useState(comment.likeCount);
    const [commentIsLike, setCommentIsLike] = useState(comment.isLike);
    const [inputVisible, setInputVisible] = useState(false);

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

    const onDeleteComment = async() => {
        try {
            const result = await deleteCommentAPI(comment.commentIdx,postIdx,0);
            setCommentCount(commentCount-1);
            if(result?.success){
                try{
                    const commentResult = await getCommentListAPI(postIdx);
                    setCommentData(commentResult.data);
                }catch(e){
                    console.log(e)
                }
            }                
        } catch (e) {
            console.log(e)
        }
    }
    const onReplyClick = () => {
        setInputVisible(!inputVisible);
    }
    return (
        <CommentItem
            comment={comment} 
            commentLikeCount={commentLikeCount} 
            commentIsLike={commentIsLike}
            inputVisible={inputVisible}
            setCommentData={setCommentData}
            setCommentCount={setCommentCount}
            commentCount={commentCount}
            onCommentLikeClick={onCommentLikeClick}
            onDeleteComment={onDeleteComment}
            onReplyClick={onReplyClick}
            reply={reply}
        />
    )
}

export default CommentItemContainer;