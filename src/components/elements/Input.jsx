import styled, { css } from "styled-components";

const Input = ({ variant, text, value, onChangeHandler }) => {
  return (
    <StInput
      variant={variant}
      placeholder={text}
      value={value}
      onChange={onChangeHandler}
    />
  );
};

export default Input;

const StInput = styled.input`
  ${({ variant }) => {
    return (
      variant === "header" &&
      css`
        border: none;
        outline: none;
        background-color: #efefef;
        width: 235px;
        height: 35px;
        padding: 3px 0;
        font-size: 16px;
        border-radius: 5px;
      `
    );
  }}

  ${({ variant }) => {
    return (
      variant === "comment" &&
      css`
        border: none;
        outline: none;
        height: 100%;
        padding: 4px 0;
        font-size: 16px;
        margin-left: 5px;
      `
    );
  }}
`;
