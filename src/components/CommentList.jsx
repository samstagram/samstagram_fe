import styled from "styled-components";
import Comment from "./Comment";
import Input from "./elements/Input";
import Button from "components/elements/Button";
import { colors } from "styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "redux/modules/commentsSlice";
import { useEffect } from "react";

const CommentList = () => {
  const dispatch = useDispatch();

  const commentList = useSelector((state) => state.comments.comments);

  useEffect(() => {
    dispatch(__getComments());
  }, [dispatch]);

  // [
  //   {
  //     commentsId: 3,
  //     createdAt: "2022년 08월 23일 17시 54분",
  //     username: "유형엽",
  //     useremail: "you@gmail.com",
  //     userprofile: "url",
  //     content: "좋은 하루 보내세요",
  //   },
  //   {
  //     commentsId: 2,
  //     createdAt: "2022년 08월 23일 16시 45분",
  //     username: "정성일",
  //     useremail: "sung1@gmail.com",
  //     userprofile: "url",
  //     content: "방가와용",
  //   },
  //   {
  //     commentsId: 1,
  //     createdAt: "2022년 08월 22일 17시 54분",
  //     username: "이태민",
  //     useremail: "sparta@gmail.com",
  //     userprofile: "url",
  //     content: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
  //   },
  // ];

  return (
    <div>
      <StCommentList>
        {commentList?.map((comment) => (
          <Comment key={comment.id} content={comment} />
        ))}
      </StCommentList>
    </div>
  );
};

export default CommentList;

const StCommentList = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid ${colors.gray2};
  border-bottom: 1px solid ${colors.gray2};
  padding: 8px;
  padding-left: 12px;
  gap: 4px;
`;
