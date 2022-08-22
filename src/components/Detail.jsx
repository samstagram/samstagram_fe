import styled from "styled-components";
import Button from "components/elements/Button";
import { colors } from "styles/theme";
import anonymous_user from "assets/anonymous_user.jpg";
import CommentList from "components/CommentList";
import CommentForm from "components/CommentForm";
import Carousel from "components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getPost } from "redux/modules/postsSlice";
import Loading from "./Loading";

const Detail = ({ id, handleOpenModal }) => {
  console.log("ID", id);

  const dispatch = useDispatch();
  // const article = {
  //   articlesId: 4,
  //   createdAt: "2022년 08월 24일 12시 17분",
  //   username: "test_samsta",
  //   useremail: "sparta@gmail.com",
  //   userprofile: "url",
  //   isMyArticles: false,
  //   commentCnt: "9",
  //   image: [
  //     "http://localhost:3000/80b985cc-a8e5-4838-9bea-f3761d43bf36",
  //     "http://localhost:3000/8458a0c6-a957-4a91-a743-78bbfd0298ac",
  //     "http://localhost:3000/9cfc53e6-9708-4594-9ea4-c40b4f8a71ec",
  //   ],
  // };

  const { post, isLoading, error } = useSelector((state) => state.posts);

  const {
    articlesId,
    createdAt,
    username,
    useremail,
    userprofile,
    isMyArticles,
    commentCnt,
    image,
  } = post;

  // console.log(post);
  // dispatch(__getPost(id));

  useEffect(() => {
    console.log("USEEFFECT!!!!!!!!!!!!!!!!!");
    dispatch(__getPost(id));
    console.log(id);
  }, [dispatch]);

  // if (isLoading) return <Loading />;

  return (
    <>
      {isLoading ? (
        <div></div>
      ) : (
        <DetailContainer>
          <DetailHeader>
            <Button variant="arrow" onClickHandler={handleOpenModal} />
            {isMyArticles && <Button variant="text">삭제하기</Button>}
          </DetailHeader>
          <DetailBody>
            <StImage>
              <Carousel length="640px">{image}</Carousel>
            </StImage>
            <StContent>
              <StUser>
                <StImg alt="user" src={anonymous_user} />
                <StName>{username}</StName>
              </StUser>
              <CommentList />
              <CommentForm />
            </StContent>
          </DetailBody>
        </DetailContainer>
      )}
    </>
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
  border-right: 1px solid ${colors.gray2};

  div {
    width: 100%;
  }
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const StUser = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  height: 60px;
  padding-left: 12px;
  gap: 10px;
`;

const StImg = styled.img`
  width: 32px;
  border-radius: 50%;
`;

const StName = styled.div`
  font-weight: 600;
`;
