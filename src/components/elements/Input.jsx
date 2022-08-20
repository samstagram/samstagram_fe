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
        width: 100%;
        height: 40px;
        padding: 3px 0;
        font-size: 16px;
      `
    );
  }}
`;
