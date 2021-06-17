import CommentListContainer from "../containers/postDetail/comment/CommentListContainer";
import PostDetailContainer from "../containers/postDetail/PostDetailContainer";



const PostDetailPage = () => {
    return(
        <>
            <PostDetailContainer/>
            <CommentListContainer />
        </>
    )
}

export default PostDetailPage;