import { useEffect } from "react";
import styled from "styled-components";
import { colors } from "styles/theme";

const Modal = ({ handleOpenModal, children }) => {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <StModal onClick={handleOpenModal}>
      <StModalBody onClick={(e) => e.stopPropagation()}>{children}</StModalBody>
    </StModal>
  );
};

export default Modal;

const StModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;

const StModalBody = styled.div`
  position: absolute;
  width: 1000px;
  height: 690px;
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: hidden;
  z-index: 111;
`;
