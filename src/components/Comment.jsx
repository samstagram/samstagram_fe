import styled from "styled-components";

const Comment = () => {
  return (
    <Stcommentbox>
      <div>
        <Stprofile></Stprofile>
      </div>

      <div>
        <StUserName>asd</StUserName>
        <StcommentTime>1일</StcommentTime>
      </div>

      <StcommentContent>asd</StcommentContent>
    </Stcommentbox>
  );
};

export default Comment;

const Stcommentbox = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  flex-direction: row;
  margin-left: 5px;
`;

const Stprofile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  margin-top: 7px;
  background-color: black;
`;

const StUserName = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: bold;
`;

const StcommentContent = styled.div`
  margin-top: 10px;
  margin-left: 10px;
`;

const StcommentTime = styled.div`
  margin-left: 20px;
  margin-top: 10px;
`;
