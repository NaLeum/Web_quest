import styled from "styled-components";
import PostItem from "./PostItem";

const PostListWrapper = styled.section`
    padding: 10px 0;
`;
const PostListHeader = styled.header`
    padding: 0 10px;
    margin-bottom: 10px;
`;

const PostList = ({postList}) => {
    console.log(postList)
    return(
        <PostListWrapper>
            <PostListHeader>NEW</PostListHeader>
            <ul>
                {postList.map((post)=>(
                    <PostItem key={post.postIdx} post={post}/>
                ))}
            </ul>
        </PostListWrapper>
    )
}

export default PostList;