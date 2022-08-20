import styled from "styled-components";
import PostItem from "./PostItem";

const PostingList = () => {
  return (
    <StPostingList>
      <PostItem />
      <PostItem />
      <PostItem />
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
