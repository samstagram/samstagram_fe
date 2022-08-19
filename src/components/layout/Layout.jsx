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
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Layout;
