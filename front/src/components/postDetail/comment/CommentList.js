import CommentItemContainer from "../../../containers/postDetail/comment/CommentItemContainer";
import Wrapper from "../../common/Wrapper";



const CommentList = ({commentData,postIdx}) => {
    console.log(commentData)
    return(
        <Wrapper>
            <ul>
                {commentData.map((comment,idx)=>(
                    <CommentItemContainer key={idx} comment={comment} postIdx={postIdx} />
                ))}
            </ul>
        </Wrapper>
    )
}

export default CommentList;