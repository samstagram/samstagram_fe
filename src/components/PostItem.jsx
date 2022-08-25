import styled from "styled-components";
import { colors } from "styles/theme";
import Button from "components/elements/Button";
import { useState } from "react";
import Modal from "components/layout/Modal";
import Detail from "components/Detail";
import Carousel from "components/Carousel";
import { useDispatch } from "react-redux";
import { __deletePosts, __getHashtagPost } from "redux/modules/postsSlice";

const PostItem = ({ postVal }) => {
  const dispatch = useDispatch();

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
  } = postVal;

  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(isLike);

  const handleDelete = (e) => {
    if (window.confirm("삭제하시겠습니까?")) {
      e.stopPropagation();
      dispatch(__deletePosts(articlesId));
      window.alert("삭제되었습니다.");
    } else {
      window.alert("취소되었습니다.");
    }
  };

  const handleOpenModal = () => setOpen(!open);

  /* HASHTAG SEARCH ----------------------------------------------------------- */
  const hashtagRegExp = /#[^\s]+/g;

  const handleClickHashtag = async (e) => {
    const target = e.target.innerText.replace("#", "");
    await dispatch(__getHashtagPost(target));
  };

  return (
    <StPostItem>
      <StPostInfo>
        <PostContainer>
          <UserImg alt="user" src={userprofile} referrerPolicy="no-referrer" />
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
          <Button variant="comment" onClickHandler={handleOpenModal} />
          {open && (
            <Modal handleOpenModal={handleOpenModal}>
              <Detail id={articlesId} handleOpenModal={handleOpenModal} />
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
                <HashtagText
                  onClick={handleClickHashtag}
                  key={`${val}-${index}`}
                  style={{ color: `${colors.blue}` }}
                >
                  {val}
                </HashtagText>
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
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
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

const HashtagText = styled.span`
  cursor: pointer;
`;
