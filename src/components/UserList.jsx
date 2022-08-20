import styled from "styled-components";
import UserItem from "components/UserItem";
import { colors } from "styles/theme";

const UserList = () => {
  return (
    <StUserList>
      <h2>회원님을 위한 추천</h2>
      <ul>
        <UserItem />
        <UserItem />
        <UserItem />
        <UserItem />
      </ul>
    </StUserList>
  );
};

export default UserList;

const StUserList = styled.div`
  h2 {
    color: ${colors.gray1};
    font-size: 16px;
    font-weight: 500;
  }
`;
