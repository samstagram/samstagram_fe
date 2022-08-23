import styled from "styled-components";
import Comment from "./Comment";
import { colors } from "styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "redux/modules/commentsSlice";
import React, { useEffect } from "react";

const CommentList = ({ id }) => {
  const dispatch = useDispatch();

  const { articlesId, commentsList, isLoading, error } = useSelector(
    (state) => state.comments
  );

  useEffect(() => {
    dispatch(__getComments(id));
  }, [dispatch, id]);

  return (
    <StCommentList>
      <ul className="scroll scrollbar">
        {commentsList?.map((comment) => (
          <li key={comment.commentsId}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </StCommentList>
  );
};

export default CommentList;

const StCommentList = styled.div`
  .scroll {
    height: 530px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid ${colors.gray2};
    padding: 8px;
    padding-left: 12px;
    gap: 4px;
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
`;
