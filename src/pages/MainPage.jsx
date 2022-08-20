import Layout from "components/layout/Layout";
import MyProfile from "components/MyProfile";
import PostingList from "components/PostingList";
import UserList from "components/UserList";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Layout>
      <StMain>
        <PostingList />
        <StUser>
          <MyProfile />
          <UserList />
        </StUser>
      </StMain>
    </Layout>
  );
};

export default MainPage;

const StMain = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const StUser = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 54px;
`;
