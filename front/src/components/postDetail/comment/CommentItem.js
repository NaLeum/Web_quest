import styled, { css } from "styled-components";
import ko from "date-fns/locale/ko";
import { formatDistance } from 'date-fns';
import CommentInputContainer from "../../../containers/postDetail/comment/CommentInputContainer";
import CommentList from "./CommentList";

const CommentWrapper = styled.li`
    border-bottom: 1px solid #dbdee0;
    padding-top: ${props => props.reply?"0px":"10px"};
    padding-bottom: 10px;
    &:first-child{
        padding-top:0;
        margin-top:-10px;
    }
    &:last-child{
        border-bottom: 0;
    }
    ${props => props.reply&&
    css`
        &:first-child{
            padding-top:10px;
            margin-top:-20px;
        } 
        &:last-child{
            padding-bottom:0;
        }
        padding-top:10px;
    `}
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
    margin-bottom:10px;
`;
const FooterItem = styled.span`
    margin-right: 5px;
`;
const CommentLike = styled(FooterItem)`
    cursor: pointer;
    color : ${props => props.commentIsLike&& "#b63ae8"};
`;

const DeleteButton = styled.span`
    cursor:pointer;
`;
const CommentItem = ({
    comment,
    postIdx,
    onCommentLikeClick,
    commentLikeCount,
    commentIsLike,
    onDeleteComment,
    onReplyClick,
    inputVisible,
    setCommentData,
    setCommentCount,
    commentCount,
    reply}) => {
    const timeValue = formatDistance(new Date(comment.createdAt), new Date(), { addSuffix: true,locale: ko })
    return(
        <CommentWrapper reply={reply}>
            <CommentHeader>
                <div>
                    <Nickname>{comment.nickname}</Nickname>
                    {comment.initial &&
                        <Initial>{comment.initial}대</Initial>
                    }
                </div>
                <div>
                {comment.isMine &&
                    <DeleteButton onClick={onDeleteComment}>삭제</DeleteButton>
                }
                </div>
            </CommentHeader>
            <CommentMain>
                {comment.content}
            </CommentMain>
            <CommentFooter>
                <div>
                    <FooterItem>{timeValue}</FooterItem>
                    {!reply && <FooterItem onClick={onReplyClick}>답글달기</FooterItem>}
                </div>
                <CommentLike onClick={onCommentLikeClick} commentIsLike={commentIsLike} >
                    좋아요 {commentLikeCount}
                </CommentLike>
            </CommentFooter>
            {inputVisible &&
                <CommentInputContainer 
                reply={1} 
                text={"대댓글을 남겨주세요"}
                setCommentData={setCommentData}
                setCommentCount={setCommentCount}
                commentCount={commentCount}
                commentIdx={comment.commentIdx}
                userIdx={comment.userIdx}
            /> 
            }
            {(Array.isArray(comment.reply)&&comment.reply.length !==0) &&
                <CommentList 
                    commentData={comment.reply}
                    reply={true} 
                    postIdx={postIdx}
                    setCommentData={setCommentData}
                    setCommentCount={setCommentCount}
                    commentCount={commentCount}
                />
            }
        </CommentWrapper>
    )
}

export default CommentItem;