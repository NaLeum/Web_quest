import styled from "styled-components";
import Wrapper from "../common/Wrapper";
import TextareaAutosize from "react-autosize-textarea";


const CreatePostHeader = styled.header`
    display:flex;
    justify-content: center;
    align-items: center;
    position:relative;
    margin-bottom: 20px;
`;
const HeaderTitle = styled.h1`
    font-size: 24px;
    margin-bottom: -3px;
`;
const SubmitButton = styled.button`
    background-color: #de91fc;
    border: 0;
    border-radius: 8px;
    padding-top: 2px;
    padding: 2px 10px 0 10px;
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    right:0;
`;
const TitleInput = styled(TextareaAutosize)`
    display:block;
    width: 100%;
    font-size: 20px;
    border:0;
    border-bottom: 1px solid  #dbdee0;
    margin-bottom: 15px;
    resize:none;
    &:focus{
        outline: none;
    }
`;
const ContentInput = styled(TitleInput)`
    border:0;
    font-size: 16px;
`;

const CreatePost = ({communityData,onInputChange,onSubmitClick}) => {
    return(
        <Wrapper>
            <form onSubmit={onSubmitClick}>
                <CreatePostHeader>
                    <HeaderTitle>
                        {communityData.communityName}게시판
                    </HeaderTitle>
                    <SubmitButton onSubmit={onSubmitClick}>등록</SubmitButton>
                </CreatePostHeader>
                <main>
                    <TitleInput type="text" name="title" placeholder="제목을 적어주세요" onChange={onInputChange} required/>
                    <ContentInput type="text" name="content" placeholder="내용을 적어주세요" onChange={onInputChange} required/>
                </main>
            </form>
        </Wrapper>
    )
}
export default CreatePost;