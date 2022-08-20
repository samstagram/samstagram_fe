import styled from "styled-components";
import Header from "components/Header";
import { colors } from "styles/theme";

const Layout = (props) => {
  return (
    <LayoutContainer>
      <StyledDiv></StyledDiv>
      <Header />
      {props.children}
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const StyledDiv = styled.div`
  background-color: ${colors.white};
  border-bottom: 1px solid ${colors.gray2};
  height: 60px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -111;
`;
