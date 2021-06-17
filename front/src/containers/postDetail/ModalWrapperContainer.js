import { useEffect } from "react";
import ModalWrapper from "../../components/postDetail/modal/ModalWrapper";

const ModalWrapperContainer = ({onClickModal,modalVisible, children}) => {
    useEffect(() => {
        document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`;
        return () => {
            const scrollY = document.body.style.top;
            document.body.style.cssText = `position: ""; top: "";`;
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
        };
    }, []);

    const onMaskClick = (e) => {
        if (e.target === e.currentTarget) {
            onClickModal()
        }
      }
    
    
    return <ModalWrapper children={children} onMaskClick={onMaskClick}  modalVisible={modalVisible} />
}

export default ModalWrapperContainer;