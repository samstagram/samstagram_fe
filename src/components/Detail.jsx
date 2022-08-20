import styled from "styled-components";
import Button from "components/elements/Button";
import { colors } from "styles/theme";
import anonymous_user from "assets/anonymous_user.jpg";
import Input from "components/elements/Input";
import CommentList from "components/CommentList";
import CommentForm from "components/CommentForm";

const Detail = ({ handleOpenModal }) => {
  const article = {
    articlesId: 4,
    createdAt: "2022년 08월 24일 12시 17분",
    username: "test_samsta",
    useremail: "sparta@gmail.com",
    userprofile: "url",
    isMyArticles: false,
    commentCnt: "9",
    image: ["url", "url", "url"],
  };

  const {
    articlesId,
    createdAt,
    username,
    useremail,
    userprofile,
    isMyArticles,
    commentCnt,
    image,
  } = article;

  return (
    <DetailContainer>
      <DetailHeader>
        <Button variant="arrow" onClickHandler={handleOpenModal} />
        {isMyArticles && <Button variant="text">삭제하기</Button>}
      </DetailHeader>
      <DetailBody>
        <StImage></StImage>
        <StContent>
          <StUser>
            <StImg>
              <img alt="user" src={anonymous_user} />
            </StImg>
            <StName>{username}</StName>
          </StUser>
          <CommentList />
          <CommentForm />
        </StContent>
      </DetailBody>
    </DetailContainer>
  );
};

export default Detail;

const DetailContainer = styled.div`
  width: 100%;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 50px;
  padding: 0 20px;

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: 500;
  }

  input {
    padding: 10px;
  }

  button {
    color: ${colors.blue};
    font-weight: 500;
  }
`;

const DetailBody = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StImage = styled.div`
  width: 640px;
  height: 640px;
  background: pink;
`;

const StContent = styled.div`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const StUser = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  height: 60px;
  gap: 10px;
`;

const StImg = styled.div`
  display: flex;
  width: 32px;
  border-radius: 50%;
`;

const StName = styled.div`
  font-weight: 600;
`;
