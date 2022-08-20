import styled from "styled-components";
import Comment from "./Comment";
import Input from "./elements/Input";
import Button from "components/elements/Button";
import { colors } from "styles/theme";

const CommentList = () => {
  const commentList = [
    {
      commentsId: 3,
      createdAt: "2022년 08월 23일 17시 54분",
      username: "유형엽",
      useremail: "you@gmail.com",
      userprofile: "url",
      content: "좋은 하루 보내세요",
    },
    {
      commentsId: 2,
      createdAt: "2022년 08월 23일 16시 45분",
      username: "정성일",
      useremail: "sung1@gmail.com",
      userprofile: "url",
      content: "방가와용",
    },
    {
      commentsId: 1,
      createdAt: "2022년 08월 22일 17시 54분",
      username: "이태민",
      useremail: "sparta@gmail.com",
      userprofile: "url",
      content: "ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴ",
    },
  ];

  return (
    <StCommentList>
      {commentList.map((val) => (
        <Comment key={val.commentsId} comment={val} />
      ))}
    </StCommentList>
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
  gap: 4px;
`;
