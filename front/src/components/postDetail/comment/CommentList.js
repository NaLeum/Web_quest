import Wrapper from "../../common/Wrapper";



const CommentList = ({commentData}) => {
    return(
        <Wrapper>
            <ul>
                {commentData.map((item)=>(
                    <div>{item.content}</div>
                ))}
            </ul>
        </Wrapper>
    )
}

export default CommentList;