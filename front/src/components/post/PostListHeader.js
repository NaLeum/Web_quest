import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = styled.header`
padding: 0 10px;
margin-bottom: 10px;
display:flex;
align-items: center;
justify-content: space-between;
`;
const PostListWrapper = styled.section`
    padding-top: 10px;
`;

const WritePostButton = styled(Link)`
    color: black;
    text-decoration: none;
    cursor: pointer;
`;

const PostListHeader = ({onCreatePostClick}) => {
    return(
        <PostListWrapper>
            <Header>
                <span>NEW</span>
                <WritePostButton to={'/createPost'} onClick={onCreatePostClick}>글쓰기</WritePostButton>
            </Header>
        </PostListWrapper>
    )
}

export default PostListHeader;