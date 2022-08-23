import { useState } from "react";
import { useDispatch } from "react-redux";
import { __postComments } from "redux/modules/commentsSlice";
import lengthVali from "shared/lengthVali";
import styled from "styled-components";
import { colors } from "styles/theme";
import Button from "./elements/Button";
import Input from "./elements/Input";

const CommentForm = ({ id }) => {
  const dispatch = useDispatch();
  const [comment, setComment] = useState({
    content: "",
    articlesId: id,
  });

  const COMMENT_MAX_LENGTH = 40;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(__postComments(comment));
    setComment({
      ...comment,
      content: "",
    });
  };

  const handleChange = (e) => {
    const { val, verify } = lengthVali(e.target.value, COMMENT_MAX_LENGTH);

    setComment({
      ...comment,
      content: val,
    });
  };

  return (
    <StForm onSubmit={handleSubmit}>
      <Input
        variant="comment"
        text="댓글 달기..."
        value={comment.content}
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
    padding-left: 4px;
  }

  button {
    padding: 10px 16px;
    color: ${colors.blue};
  }
`;
