import styled from 'styled-components';


const Overlay = styled.div`
  display: ${(props) => (props.modalVisible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`


const ModalOverlay = ({modalVisible,children}) => {
    return (
        <Overlay modalVisible={modalVisible} >
            {children}
        </Overlay>
    )
}

export default ModalOverlay;