import styled from "styled-components";

const CommentWrapper = styled.section`
    padding: 0 10px;
`;
const CommentForm = styled.form`
    display: flex;
    justify-content: space-between;
`;
const Input = styled.input`
    font-size: 16px;
    width: 100%;
    border:0;
    &:focus{
        outline:none;
    }
`;

const CommetButton = styled.button`
    width: 50px;
    padding: 3px 0;
    border: 0;
    background-color:"#b63ae8";
    border-radius: 8px;
`;

const CommentInput = ({onCommentChange,commentContent,onSubmitClick,text}) => {
    return(
        <CommentWrapper>
            <CommentForm onSubmit={onSubmitClick}>
                <Input type="text" placeholder={text||"댓글을 입력해주세요"} onChange={onCommentChange} value={commentContent} required />
                <CommetButton onSubmit={onSubmitClick}>등록</CommetButton>
            </CommentForm>
        </CommentWrapper>
    )
}

export default CommentInput;