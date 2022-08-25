import { useState } from "react";
import styled from "styled-components";
import Button from "components/elements/Button";
import anonymous_user from "assets/anonymous_user.jpg";
import { colors } from "styles/theme";
import { useDispatch } from "react-redux";
import { __getUsers } from "redux/modules/usersSlice";
import { __postUserList } from "redux/modules/userListSlice";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();

  const { memberId, username, useremail, userprofile, isFollow } = user;

  const [follow, setFollow] = useState(isFollow);

  const handleFollow = async () => {
    setFollow(!follow);
    await dispatch(__postUserList(memberId));
    await dispatch(__getUsers());
  };

  return (
    <StProfile follow={follow}>
      <img
        alt="user"
        src={userprofile ? userprofile : anonymous_user}
        referrerPolicy="no-referrer"
      />
      <NameContainer>
        <StName>{username}</StName>
        <StEmail>{useremail}</StEmail>
      </NameContainer>
      <Button variant="text" onClickHandler={handleFollow}>
        {follow ? "팔로잉" : "팔로우"}
      </Button>
    </StProfile>
  );
};

export default UserItem;

const StProfile = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 24px;
    object-fit: cover;
  }

  button {
      color: ${({ follow }) => (follow ? `${colors.black}` : `${colors.blue}`)};
    }
  }
`;

const NameContainer = styled.div`
  flex-grow: 1;
`;

const StName = styled.div`
  font-weight: 500;
`;

const StEmail = styled.div`
  color: ${colors.gray1};
`;
