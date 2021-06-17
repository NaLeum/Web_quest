import Wrapper from "../../common/Wrapper";
import CommentItem from "./CommentItem";



const CommentList = ({commentData}) => {
    console.log(commentData)
    return(
        <Wrapper>
            <ul>
                {commentData.map((comment,idx)=>(
                    <CommentItem key={idx} comment={comment}/>
                ))}
            </ul>
        </Wrapper>
    )
}

export default CommentList;