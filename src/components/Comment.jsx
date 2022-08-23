import styled from "styled-components";
import { colors } from "styles/theme";

const Comment = ({ comment }) => {
  const { userprofile, username, content, createdAt } = comment;

  return (
    <StComment>
      <StImg alt="user" src={userprofile} />
      <StText>
        <StContent>
          <p>
            <span>{username}</span>
            {content}
          </p>
        </StContent>
        <StTime>{createdAt}</StTime>
      </StText>
    </StComment>
  );
};

export default Comment;

const StComment = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const StImg = styled.img`
  display: flex;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  object-fit: cover;
`;

const StText = styled.div`
  width: 300px;
`;

const StContent = styled.div`
  display: flex;
  gap: 8px;

  p {
    font-weight: 300;

    span {
      font-weight: 500;
      display: inline-block;
      margin-right: 6px;
    }
  }
`;

const StTime = styled.span`
  color: ${colors.gray1};
  font-size: 11px;
`;
