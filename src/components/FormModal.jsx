import Modal from "react-modal";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "./elements/Button";

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
        <StFormModalheader>
          <Button variant='arrow' />
          <span>새 게시물 만들기</span>
          <Button variant='text_outline'>공유하기</Button>
        </StFormModalheader>
        <hr></hr>
        <Stimagewrap />

        <StPost>
          <Stprofile />
          <StWriter>asd</StWriter>
        </StPost>

        <StTextarea rows='12' cols='30' />

        <StWrap onClick={() => setModalIsOpen(false)}></StWrap>
      </Modal>
    </StWrap>
  );
}

export default DetailModal;

const StWrap = styled.div``;

const Stimagewrap = styled.div`
  width: 70%;
  height: 92%;
  float: left;
  background-color: #eee;
`;

const StFormModalheader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StPost = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 8px;
`;

const Stprofile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  margin-top: 7px;
  background-color: black;
`;

const StWriter = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: bold;
`;

const StTextarea = styled.textarea`
  margin-left: 8px;
  margin-top: 15px;
`;
