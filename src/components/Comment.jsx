import styled from "styled-components";
import anonymous_user from "assets/anonymous_user.jpg";
import { colors } from "styles/theme";

const Comment = (props) => {
  console.log(props.content.content);
  return (
    <StComment>
      <StImg>
        <img alt='user' src={anonymous_user} />
      </StImg>
      <StText>
        <StContent>
          <p>
            <span>test_samsta</span>
            {props.content.content}
          </p>
        </StContent>
        <StTime>날짜</StTime>
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

const StImg = styled.div`
  width: 32px;
  margin-right: 10px;
  display: flex;
  img {
    width: 100%;
  }
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
