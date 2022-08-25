import styled from "styled-components";
import UserItem from "components/UserItem";
import { colors } from "styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getUserList } from "redux/modules/userListSlice";

const UserList = () => {
  const dispatch = useDispatch();

  const { userlist, isLoading, error } = useSelector((state) => state.userlist);

  useEffect(() => {
    dispatch(__getUserList());
  }, [dispatch]);

  return (
    <StUserList>
      <h2>회원님을 위한 추천</h2>
      <div>
        <ul className="scroll scrollbar">
          {userlist?.map((user) => (
            <UserItem key={user.memberId} user={user} />
          ))}
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
