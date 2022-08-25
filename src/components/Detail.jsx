import styled from "styled-components";
import Button from "components/elements/Button";
import { colors } from "styles/theme";
import CommentList from "components/CommentList";
import CommentForm from "components/CommentForm";
import Carousel from "components/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getPost } from "redux/modules/postsSlice";
import Loading from "./Loading";

const Detail = ({ id, handleOpenModal }) => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(__getPost(id));
  }, [dispatch, id]);

  return (
    <>
      {isLoading ? (
        <StLoading>
          <Loading />
        </StLoading>
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
                <StImg
                  alt="user"
                  src={userprofile}
                  referrerPolicy="no-referrer"
                />
                <StName>{username}</StName>
              </StUser>
              <StCommentList>
                <CommentList id={id} />
              </StCommentList>
              <CommentForm id={id} />
            </StContent>
          </DetailBody>
        </DetailContainer>
      )}
    </>
  );
};

export default Detail;

const StLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

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
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

const StName = styled.div`
  font-weight: 600;
`;

const StCommentList = styled.div`
  border-bottom: 1px solid ${colors.gray2};
`;
