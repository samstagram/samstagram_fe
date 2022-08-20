import styled from "styled-components";
import UserItem from "components/UserItem";
import { colors } from "styles/theme";

const UserList = () => {
  return (
    <StUserList>
      <h2>회원님을 위한 추천</h2>
      <div>
        <ul className="scroll scrollbar">
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
          <UserItem />
        </ul>
      </div>
    </StUserList>
  );
};

export default UserList;

const StUserList = styled.div`
  .scroll {
    display: inline-block;
    width: 320px;
    height: 600px;
    padding: 12px;
    overflow-y: scroll;
    border: 1px solid ${colors.gray2};
    border-radius: 6px;
    box-sizing: border-box;
  }

  .scrollbar::-webkit-scrollbar {
    width: 10px;
  }

  // scrollbar style
  .scrollbar::-webkit-scrollbar-thumb {
    background-color: ${colors.gray2};
    border-radius: 10px;
  }

  // scrollbar background
  .scrollbar::-webkit-scrollbar-track {
    background-color: ${colors.gray_bg};
  }

  h2 {
    color: ${colors.gray1};
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;
