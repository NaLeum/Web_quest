import styled from "styled-components"
import ModalWrapperContainer from "../../../containers/postDetail/ModalWrapperContainer"
import ModalOverlay from "./ModalOverlay"

const ModalInner = styled.div`
    display:flex;
    height:100vh;
    align-items: center;
    justify-content: center;
`;

const SectionWrapper = styled.section`
    width: 300px;
    height: 150px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 30px;
`;
const SectionRow = styled.span`
    display:flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    cursor: pointer;
    &:last-child{
        border-bottom: 0;
    }
`;

const Modal = ({modalVisible,maskClosable,onClickModal,onDeletPostClick,onEditPostClick}) => {
    return(
        <ModalOverlay modalVisible={modalVisible}>
            <ModalWrapperContainer onClickModal={onClickModal} maskClosable={maskClosable} modalVisible={modalVisible}>
                <ModalInner>
                    <SectionWrapper>
                        <SectionRow onClick={onEditPostClick}>수정</SectionRow>
                        <SectionRow onClick={onDeletPostClick}>삭제</SectionRow>
                        <SectionRow onClick={onClickModal}>취소</SectionRow>
                    </SectionWrapper>
                </ModalInner>
            </ModalWrapperContainer>
        </ModalOverlay>
    )
}

export default Modal;