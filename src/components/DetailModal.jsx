import Modal from "react-modal";
import React, { useState } from "react";
import styled from "styled-components";
import CommentList from "./CommentList";
import Input from "./elements/Input";

function DetailModal() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <StWrap>
      <button onClick={() => setModalIsOpen(true)}>Modal Open</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          content: {
            position: "absolute",
            top: "160px",
            left: "20%",
            right: "20%",
            bottom: "160px",
            border: "none",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "20px",
          },
        }}
      >
        <Stimagewrap />
        <CommentList />

        <StWrap onClick={() => setModalIsOpen(false)}></StWrap>
      </Modal>
    </StWrap>
  );
}

export default DetailModal;

const StWrap = styled.div``;

const Stimagewrap = styled.div`
  width: 70%;
  height: 100%;
  float: left;
  background-color: black;
`;
