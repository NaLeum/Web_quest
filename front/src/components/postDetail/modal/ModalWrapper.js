import styled from 'styled-components';


const Wrapper = styled.div`
    display: ${(props) => (props.modalVisible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
`
const ModalWrapper = ({modalVisible,children,onMaskClick}) => {
    return (
    <Wrapper onClick={onMaskClick} tabIndex="-1" modalVisible={modalVisible}> 
        {children} 
    </Wrapper>)
}

export default ModalWrapper