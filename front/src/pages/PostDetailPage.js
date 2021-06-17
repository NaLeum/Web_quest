import { useState } from "react";
import CommentListContainer from "../containers/postDetail/comment/CommentListContainer";
import PostDetailContainer from "../containers/postDetail/PostDetailContainer";



const PostDetailPage = () => {
    const [commentCount, setCommentCount] = useState(0);
    return(
        <>
            <PostDetailContainer setCommentCount={setCommentCount} commentCount={commentCount}/>
            <CommentListContainer setCommentCount={setCommentCount} commentCount={commentCount}/>
        </>
    )
}

export default PostDetailPage;