import styled from "styled-components";
import samstagram_title from "assets/samstagram_logo.png";
import Input from "components/elements/Input";
import Button from "./elements/Button";
import anonymous_user from "assets/anonymous_user.jpg";
import { colors } from "styles/theme";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <StNav>
      <StLogo alt="samstagram title" src={samstagram_title} />
      <Input variant="header" text="검색" />
      <BtnContainer>
        <Button variant="home" onClickHandler={() => navigate("/")} />
        <Button variant="plus" />
        <StProfile alt="user image" src={anonymous_user} />
      </BtnContainer>
    </StNav>
  );
};

export default Header;

const StNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 975px;
  margin: 0 auto 30px auto;
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray2};

  input {
    padding-left: 10px;
  }
`;

const StLogo = styled.img`
  width: 160px;
`;

const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StProfile = styled.img`
  width: 32px;
  border-radius: 50%;
  margin-right: 24px;
`;
