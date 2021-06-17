import { formatDistance } from 'date-fns';
import ko from "date-fns/locale/ko";
import styled from 'styled-components';
import Wrapper from '../common/Wrapper';


const PostDetailHeader = styled.header`
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
const Time = styled(Nickname)`
    font-size: 12px;
    margin-left: 10px;
`;
const PostDetailTitle = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const PostDetailContent = styled.p`
    margin-bottom: 30px;
`;

const PostDetailFooter = styled.footer`
    color: #9E9A95;
    font-size: 14px;
    padding-bottom: 20px;
    border-bottom: 1px solid #dbdee0;
`;
const PostDetailFooterItem = styled.span`
    margin-left: 5px;
`;
const PostLike = styled.span`
    cursor: pointer;
    color : ${props => props.isLike&& "#b63ae8"};
`;
const PostDetail = ({postDetailData,onLikeClick,isLike,likeCount}) => {
    console.log(postDetailData);
    const timeValue = formatDistance(new Date(postDetailData.createdAt), new Date(), { addSuffix: true,locale: ko })
    return(
        <Wrapper>
            <PostDetailHeader>
                <Nickname>{postDetailData.nickname}</Nickname>
                {postDetailData.initial &&
                        <Initial>{postDetailData.initial}대</Initial>
                }
                <Time>{timeValue}</Time>
            </PostDetailHeader>
            <main>
                <PostDetailTitle>{postDetailData.title}</PostDetailTitle>
                <PostDetailContent>{postDetailData.content}</PostDetailContent>
            </main>
            <PostDetailFooter>
                <PostLike onClick={onLikeClick} isLike={isLike}>좋아요 {likeCount}</PostLike>
                <PostDetailFooterItem>댓글 {postDetailData.commentCount}</PostDetailFooterItem>
            </PostDetailFooter>
        </Wrapper>
    )
}

export default PostDetail;