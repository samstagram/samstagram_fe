import styled from "styled-components";
import PostItem from "components/PostItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { __getPosts } from "redux/modules/postsSlice";

const PostingList = () => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.postsSlice.posts);

  useEffect(() => {
    dispatch(__getPosts());
  }, [dispatch]);

  return (
    <div>
      <StPostingList>
        {posts?.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </StPostingList>
    </div>
  );
};

export default PostingList;

const StPostingList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`;
