import CommentItemContainer from "../../../containers/postDetail/comment/CommentItemContainer";
import Wrapper from "../../common/Wrapper";



const CommentList = ({commentData,postIdx,setCommentData,setCommentCount,commentCount}) => {
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
                    />
                ))}
            </ul>
        </Wrapper>
    )
}

export default CommentList;