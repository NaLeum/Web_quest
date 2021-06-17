import styled from "styled-components";

const PostItemWrapper = styled.li`
    border-bottom: 1px solid #dbdee0;
    padding:10px;
`;

const PostItem = ({post}) => {
    return(
        <PostItemWrapper>{post.title}</PostItemWrapper>
    )
}

export default PostItem;