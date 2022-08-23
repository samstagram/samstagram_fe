import React, { useEffect } from "react";
import styled from "styled-components";
import PostItem from "components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "redux/modules/postsSlice";
import Loading from "components/Loading";

const PostingList = () => {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <StPostingList>
      {posts.length === 0 ? (
        <EmptyContainer>
          {isLoading ? <Loading /> : <span>There is no post.</span>}
        </EmptyContainer>
      ) : (
        <>
          {posts?.map((post) => (
            <React.Fragment key={post.articlesId}>
              <PostItem postVal={post} />
            </React.Fragment>
          ))}
        </>
      )}
    </StPostingList>
  );
};

export default PostingList;

const StPostingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;

const EmptyContainer = styled.div`
  width: 470px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 24px;
    font-weight: 600;
  }
`;
