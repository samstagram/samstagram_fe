import styled from "styled-components";
import anonymous_user from "assets/anonymous_user.jpg";
import Button from "components/elements/Button";
import { colors } from "styles/theme";

const MyProfile = () => {
  const user = {
    userId: 1,
    username: "test_samsta",
    useremail: "sparta@gmail.com",
    userprofile: "url",
    followingCnt: "4",
    followersCnt: "2",
  };

  const {
    userId,
    username,
    useremail,
    userprofile,
    followersCnt,
    followingCnt,
  } = user;

  const handleSignout = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      console.log("로그아웃 되었습니다.");
      window.alert("로그아웃 되었습니다.");
    } else {
      console.log("취소되었습니다.");
    }
  };
  return (
    <StProfile>
      <ProfileContainer>
        <img alt="user image" src={anonymous_user} />
        <NameContainer>
          <StName>{username}</StName>
          <StEmail>{useremail}</StEmail>
        </NameContainer>
        <Button variant="text" onClickHandler={handleSignout}>
          로그아웃
        </Button>
      </ProfileContainer>
      <FollowContainer>
        <StFollow>
          팔로워 <span>{followersCnt}</span>
        </StFollow>
        <StFollow>
          팔로우 <span>{followingCnt}</span>
        </StFollow>
      </FollowContainer>
    </StProfile>
  );
};

export default MyProfile;

const StProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 56px;
  gap: 12px;

  img {
    width: 56px;
    border-radius: 50%;
    margin-right: 24px;
  }

  button {
    color: ${colors.blue};
  }
`;

const NameContainer = styled.div`
  flex-grow: 1;
`;

const StName = styled.div`
  font-weight: 600;
`;

const StEmail = styled.div`
  color: ${colors.gray1};
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const FollowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 40px;

  span {
    font-weight: 500;
  }
`;

const StFollow = styled.div``;
