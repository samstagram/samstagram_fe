import styled from "styled-components";
import samstagram_logo from "assets/samstagram_logo.png";
import Button from "components/elements/Button";
import { colors } from "styles/theme";

const Login = () => {
  return (
    <StLoginContainer>
      <ImageContainer>
        <img alt="samstagram title" src={samstagram_logo} />
      </ImageContainer>

      <Button variant="google">
        <span>Google로 로그인</span>
      </Button>
      <MessageContainer>
        <span>Instagram Clone Coding Project.</span>
      </MessageContainer>
    </StLoginContainer>
  );
};

export default Login;

const StLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  margin: 160px auto;
  padding: 60px 0;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray1};
  border-radius: 4px;
  gap: 40px;
  position: relative;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;

    span {
      font-size: 14px;
      color: ${colors.black};
    }
  }
`;

const ImageContainer = styled.div`
  width: 180px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${colors.gray1};

  img {
    width: 100%;
  }
`;

const MessageContainer = styled.div`
  position: absolute;
  bottom: -30px;
  font-size: 14px;
  color: ${colors.gray1};
`;
