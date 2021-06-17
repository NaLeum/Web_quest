import styled from "styled-components";
import ko from "date-fns/locale/ko";
import { formatDistance} from 'date-fns'

const PostItemWrapper = styled.li`
    border-bottom: 1px solid #dbdee0;
    padding:10px;
    cursor: pointer;
`;
const PostHeader = styled.header`
    display:flex;
    align-items: center;
    margin-bottom: 15px;
`;
const Nickname = styled.span`
    color: #9E9A95;
    margin-bottom: -2px;
`;
const Initial = styled.span`
    font-size: 12px;
    border: 1px solid #DE91FC;
    color: #DE91FC;
    padding:0 5px;
    padding-top: 1px;
    border-radius: 10px;
    margin-left: 5px;
`;

const PostTitle = styled.p`
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
`;

const PostContent = styled.p`
    color: gray;
    margin-bottom: 15px;
`;
const PostFooter = styled.footer`
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: #9E9A95;
    font-size: 14px;
`;
const FooterItem = styled.span`
    margin-left: 5px;
`;

const PostItem = ({post}) => {
    const timeValue = formatDistance(new Date(post.createdAt), new Date(), { addSuffix: true,locale: ko })
    return(
        <PostItemWrapper value={post.postIdx}>
            <PostHeader>
                <Nickname>{post.nickname}</Nickname>
                {post.initial &&
                    <Initial>{post.initial}대</Initial>
                }
            </PostHeader>
            <main>
                <PostTitle>{post.title}</PostTitle>
                <PostContent>{post.content}</PostContent>
            </main>
            <PostFooter>
                <div>
                    <span>{post.communityName}</span>
                    <FooterItem>{timeValue}</FooterItem>
                </div>
                <div>
                    <FooterItem>좋아요 {post.likeCount}</FooterItem>
                    <FooterItem>댓글 {post.commentCount}</FooterItem>
                </div>
            </PostFooter>
        </PostItemWrapper>
    )
}

export default PostItem;