import styled from "styled-components";
import anonymous_user from "assets/anonymous_user.jpg";
import { colors } from "styles/theme";
import Button from "components/elements/Button";
import { useState } from "react";
import Modal from "components/layout/Modal";
import Detail from "components/Detail";
import Carousel from "components/Carousel";

import instagram_05 from "assets/instagram_05.png";
import instagram_06 from "assets/instagram_05.png";
import instagram_07 from "assets/instagram_05.png";
import { useDispatch, useSelector } from "react-redux";
import { __deletePosts } from "redux/modules/postsSlice";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  console.log(post);

  const item = {
    articlesId: 4,
    createdAt: "2022년 08월 24일 12시 17분",
    username: "test_samsta",
    useremail: "sparta@gmail.com",
    userprofile: "url",
    content:
      "잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 넌 모르지 아직 못다 핀 널 위해 쓰여진 오래된 사랑시 헤매도 좋으니 웃음 짓게 되길. 잊지마 넌 흐린 어둠 사이 왼손으로 그린 별 하나 보이니 그 유일함이 얼마나 아름다운지 말야 넌 모르지 아직 못다 핀 널 위해 쓰여진 오래된 사랑시 헤매도 좋으니 웃음 짓게 되길", // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type",
    isMyArticles: true,
    image: [
      "blob:http://localhost:3000/80b985cc-a8e5-4838-9bea-f3761d43bf36",
      "blob:http://localhost:3000/8458a0c6-a957-4a91-a743-78bbfd0298ac",
      "blob:http://localhost:3000/9cfc53e6-9708-4594-9ea4-c40b4f8a71ec",
    ],
    isLike: false,
    likeCnt: "5,024",
    commentCnt: "12",
  };

  const {
    articlesId,
    createdAt,
    username,
    useremail,
    userprofile,
    content,
    isMyArticles,
    image,
    isLike,
    likeCnt,
    commentCnt,
  } = post;

  const [like, setLike] = useState(isLike);

  const handleDelete = (e) => {
    console.log(e);
    if (window.confirm("삭제하시겠습니까?")) {
      e.stopPropagation();
      dispatch(__deletePosts(articlesId));
      window.alert("삭제되었습니다.");
    } else {
      console.log("취소되었습니다.");
    }
  };

  // const imgArr = [instagram_05, instagram_06, instagram_07];

  const hashtagRegExp = /#[^\s]+/g;

  return (
    <StPostItem>
      <StPostInfo>
        <PostContainer>
          <UserImg alt="user" src={anonymous_user} />
          <span>{username}</span>
        </PostContainer>
        {isMyArticles && (
          <Button variant="trash" onClickHandler={handleDelete} />
        )}
      </StPostInfo>
      <ImageContainer>
        <Carousel length="470px">{image}</Carousel>
      </ImageContainer>
      <StContent>
        <BtnContainer>
          <Button
            onClickHandler={() => setLike(!like)}
            variant={like ? "heart_filled" : "heart_outline"}
          />
          <Button
            variant="comment"
            onClickHandler={() => {
              setOpen(!open);
            }}
          />
          {open && (
            <Modal
              handleOpenModal={() => {
                setOpen(!open);
              }}
            >
              <Detail handleOpenModal={() => setOpen(!open)} />
            </Modal>
          )}
        </BtnContainer>
        <StLike>
          <span>
            좋아요 <StCnt>{likeCnt}개</StCnt>
          </span>
        </StLike>
        <ContentContainer>
          <StText>
            <Stname>{username}</Stname>
            {content.split(/(#[^\s]+)/g).map((val, index) =>
              hashtagRegExp.test(val) ? (
                <span
                  key={`${val}-${index}`}
                  style={{ color: `${colors.blue}` }}
                >
                  {val}
                </span>
              ) : (
                <span key={`${val}-${index}`}>{val}</span>
              )
            )}
          </StText>
          <StTime>{createdAt}</StTime>
          <StComment onClick={() => console.log("COMMENT CLICKED!")}>
            댓글 {commentCnt}개 모두 보기
          </StComment>
        </ContentContainer>
      </StContent>
    </StPostItem>
  );
};

export default PostItem;

const StPostItem = styled.div`
  width: 470px;
  border: 1px solid ${colors.gray2};
  border-radius: 4px;
  padding-bottom: 20px;
  background-color: ${colors.white};
`;

const StPostInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray2};
  padding: 6px;

  button {
    width: 24px;
    margin-right: 4px;
    color: ${colors.gray2};
  }
`;

const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  gap: 10px;

  span {
    font-weight: 600;
  }
`;

const UserImg = styled.img`
  width: 32px;
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  height: 470px;
`;

const StContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 6px;
  border-top: 1px solid ${colors.gray2};
`;

const BtnContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const StLike = styled.div`
  padding: 6px;
  font-weight: 500;
  span {
    font-size: 14px;
  }
`;

const StCnt = styled.span`
  font-weight: 600;
`;

const ContentContainer = styled.div`
  padding: 4px 6px;
`;

const Stname = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-weight: 600;
`;

const StText = styled.p`
  white-space: pre-wrap;
`;

const StTime = styled.div`
  margin-top: 8px;
  color: ${colors.gray1};
  font-size: 12px;
`;

const StComment = styled.div`
  margin-top: 8px;
  color: ${colors.gray1};
  font-size: 12px;
  cursor: pointer;
`;
