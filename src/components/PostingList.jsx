import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PostItem from "components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "redux/modules/postsSlice";
import Loading from "components/Loading";

const PostingList = () => {
  const dispatch = useDispatch();

  const [target, setTarget] = useState(null);
  const pageRef = useRef(0);

  const { posts, isLoading } = useSelector((state) => state.posts);

  const fetchData = () => {
    console.log("FETCHDATA", pageRef.current);
    if (pageRef.current === 1) {
      pageRef.current += 1;
    } else {
      dispatch(__getPosts(pageRef.current));
      pageRef.current += 1;
    }
  };

  useEffect(() => {
    console.log("USEEFFECT", pageRef.current);
    if (pageRef.current === 0) {
      pageRef.current += 1;
    } else {
      fetchData();
    }
  }, []);

  useEffect(() => {
    let observer;
    // 컴포넌트 렌더링이 되지 않으면 observe할 수 없음
    if (target) {
      const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);
          await fetchData();
          observer.observe(entry.target);
        }
      };
      observer = new IntersectionObserver(onIntersect, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

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
      <div ref={setTarget} />
      {/* <>{isPageLoading && <Loading />}</> */}
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
