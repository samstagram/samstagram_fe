import { useState } from "react";
import styled from "styled-components";
import { colors } from "styles/theme";
import Button from "./elements/Button";
import Input from "./elements/Input";

const CommentForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const val = value.substr(0, 40);
    setText(val);
  };

  return (
    <StForm onSubmit={handleSubmit}>
      <Input
        variant="comment"
        text="댓글 달기..."
        value={text}
        onChangeHandler={handleChange}
      />
      <Button type="submit" variant="text">
        게시
      </Button>
    </StForm>
  );
};

export default CommentForm;

const StForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  input {
    flex-grow: 1;
  }

  button {
    padding: 10px 16px;
    color: ${colors.blue};
  }
`;
