import styled from "styled-components";
import Comment from "./Comment";
import Input from "./elements/Input";
import Button from "components/elements/Button";

const CommentList = () => {
  return (
    <StCommentList>
      <StCommenttop>
        <StWriterbox>
          <Stprofile></Stprofile>
          <StWriter>asd</StWriter>
        </StWriterbox>
        <Button variant='trash'></Button>
      </StCommenttop>

      <StCommentbox>
        <Comment />
      </StCommentbox>

      <StInputbox>
        <Stetcbtn>
          <Button variant='heart_outline'>
            <Stlikebtn>좋아요</Stlikebtn>
          </Button>
          <Button variant='comment'>
            <Stcommentbtn>댓글입력</Stcommentbtn>
          </Button>
        </Stetcbtn>

        <StInputboxContent>
          <div>
            <Stlikecnt>OO명</Stlikecnt>이 좋아합니다.
          </div>
          <Stdate>O일전</Stdate>
        </StInputboxContent>

        <Input variant='comment' text='댓글 달기...' />
      </StInputbox>
    </StCommentList>
  );
};

export default CommentList;

const StCommentList = styled.div`
  width: 30%;
  height: 100%;
  float: right;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
`;

const StWriterbox = styled.div`
  margin-top: 3px;
  margin-left: 5px;
  height: 40px;
  display: flex;
  align-items: center;
`;

const StCommenttop = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
`;

const StInputbox = styled.div`
  height: 150px;
  margin-left: 10px;
`;

const Stetcbtn = styled.div`
  margin-bottom: 15px;
`;

const StInputboxContent = styled.div``;

const Stlikecnt = styled.span`
  font-weight: bold;
`;

const Stdate = styled.div`
  font-size: 12px;
`;

const Stlikebtn = styled.span`
  padding-left: 4px;
`;

const Stcommentbtn = styled.span`
  padding-left: 4px;
`;

const StCommentbox = styled.div`
  flex-grow: 1;
`;

const Stprofile = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  display: flex;
  margin-top: 7px;
  background-color: black;
`;

const StWriter = styled.div`
  margin-left: 20px;
  margin-top: 10px;
  font-weight: bold;
`;
