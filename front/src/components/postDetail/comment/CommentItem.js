import styled from "styled-components";
import ko from "date-fns/locale/ko";
import { formatDistance } from 'date-fns';

const CommentWrapper = styled.li`
    border-bottom: 1px solid #dbdee0;
    padding-bottom: 10px;
`;

const CommentHeader = styled.header`
    display:flex;
    align-items: center;
    margin-bottom: 15px;
    justify-content: space-between;
`;
const Nickname = styled.span`
    font-size: 14px;
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
const CommentMain = styled.main`
    margin-bottom: 10px;
`;
const CommentFooter = styled.footer`
    display:flex;
    align-items: center;
    justify-content: space-between;
    color: #9E9A95;
    font-size: 14px;
`;
const FooterItem = styled.span`
    margin-right: 5px;
`;
const CommentItem = ({comment}) => {
    const timeValue = formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true,locale: ko })

    return(
        <CommentWrapper>
            <CommentHeader>
                <div>
                    <Nickname>{comment.nickname}</Nickname>
                    {comment.initial &&
                            <Initial>{comment.initial}대</Initial>
                    }
                </div>
                <div>
                    <span>삭제</span>
                </div>
            </CommentHeader>
            <CommentMain>
                {comment.content}
            </CommentMain>
            <CommentFooter>
                <FooterItem>{timeValue}</FooterItem>
                <FooterItem>좋아요 {comment.likeCount}</FooterItem>
            </CommentFooter>
        </CommentWrapper>
    )
}

export default CommentItem;