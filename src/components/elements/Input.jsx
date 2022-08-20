import styled, { css } from "styled-components";

const Input = ({ variant, text }) => {
  return <StInput variant={variant} placeholder={text} />;
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
        width: 80%;
        height: 50px;
        padding: 3px 0;
        font-size: 16px;
        margin-left: 5px;
      `
    );
  }}
`;
