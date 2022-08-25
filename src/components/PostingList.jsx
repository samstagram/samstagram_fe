import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PostItem from "components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "redux/modules/postsSlice";
import Loading from "components/Loading";

const PostingList = () => {
  const dispatch = useDispatch();

  const { posts, hasMore, keyword, isLoading, error } = useSelector(
    (state) => state.posts
  );

  const [alertMessage, setAlertMessage] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const observerRef = useRef();

  useEffect(() => {
    keyword === "" && dispatch(__getPosts(pageNum));
  }, [dispatch, pageNum, keyword]);

  const observer = (node) => {
    if (isLoading) return;
    if (keyword) return;
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore) {
          setPageNum((page) => page + 1);
        }
        if (!hasMore) {
          setAlertMessage("게시물이 없습니다.");
        }
      },
      { threshold: 0.5 }
    );
    node && observerRef.current.observe(node);
  };

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
      {keyword === "" && <div ref={observer} />}
      <StAlertMessage>{alertMessage}</StAlertMessage>
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

const StAlertMessage = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding: 15px 0 40px 0;
`;
