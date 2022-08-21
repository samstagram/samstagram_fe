import { createGlobalStyle } from "styled-components";
import { colors } from "styles/theme";

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 14px;
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans KR', 'Roboto', sans-serif;
  }
  
  body {
    margin: 0 auto;
    width: 1440px;
    background-color: ${colors.gray_bg};
  }

  h1 {
    margin: 0;
    font-size: 28px;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 24px;
  }

  h3 {
    margin: 0;
    font-size: 20px;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: ${colors.black};

    :active {
      color: ${colors.black};
    }
  }

  button {
    cursor: pointer;
  }

  input {
    ::placeholder {
      font-size: 14px;
    }
  }

  button, input, textarea {
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
