import styled from "styled-components";
import PostItem from "components/PostItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { __getPosts } from "redux/modules/postsSlice";
import Loading from "components/Loading";

const PostingList = () => {
  const dispatch = useDispatch();

  const { posts, isLoading } = useSelector((state) => state.posts);
  console.log(posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <StPostingList>
          {posts.map((post) => (
            <PostItem post={post} />
          ))}
        </StPostingList>
      )}
    </>
  );
};

export default PostingList;

const StPostingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
