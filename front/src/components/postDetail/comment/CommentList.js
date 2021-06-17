import CommentItemContainer from "../../../containers/postDetail/comment/CommentItemContainer";
import Wrapper from "../../common/Wrapper";



const CommentList = ({commentData,postIdx,setCommentData,setCommentCount,commentCount,reply}) => {
    return(
        <Wrapper>
            <ul>
                {commentData.map((comment,idx)=>(
                    <CommentItemContainer 
                        key={idx} 
                        comment={comment} 
                        postIdx={postIdx} 
                        setCommentData={setCommentData}
                        setCommentCount={setCommentCount}
                        commentCount={commentCount}
                        reply={reply}
                    />
                ))}
            </ul>
        </Wrapper>
    )
}

export default CommentList;