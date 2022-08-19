import { createGlobalStyle } from 'styled-components';
import { colors } from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  * {
    font-size: 16px;
    box-sizing: border-box;
    font-family: 'Noto Sans', 'Noto Sans KR', 'Roboto', sans-serif;
  }
    
  body {
    margin: 0 auto;
    width: 1440px;
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
  }

  p {
    font-size: 16px;
    margin: 0;
  }

  a {
    text-decoration: none;
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
