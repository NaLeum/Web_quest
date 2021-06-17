import { useState } from "react";
import { withRouter } from "react-router";
import CommentInput from "../../../components/postDetail/comment/CommentInput"
import { getCommentListAPI, postCreateCommentAPI } from "../../../libs/api";


const CommentInputContainer = ({match,setCommentData,setCommentCount,commentCount}) => {
    const [commentContent,setCommentContent] = useState("");

    const onCommentChange = (e) => {
        setCommentContent(e.currentTarget.value);
    }

    const onSubmitClick = async(e) => {
        e.preventDefault();
        try {
            const result = await postCreateCommentAPI(commentContent,match.params.postIdx,0);
            if(result?.success){
                try{
                    const commentResult = await getCommentListAPI(match.params.postIdx);
                    setCommentData(commentResult.data);
                    setCommentContent("");
                    setCommentCount(commentCount+1);
                }catch(e){
                    console.log(e)
                }
            }                
        } catch (e) {
            console.log(e)
        }
    }

    return(
        <CommentInput 
            onCommentChange={onCommentChange} 
            commentContent={commentContent} 
            onSubmitClick={onSubmitClick}
        />
    )
}

export default withRouter(CommentInputContainer);