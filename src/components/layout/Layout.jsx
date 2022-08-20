import styled from 'styled-components';
import Header from 'components/Header';

const Layout = (props) => {
  return (
    <LayoutContainer>
      <Header />
      {props.children}
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export default Layout;
