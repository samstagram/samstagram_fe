import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "components/elements/Button";
import { colors } from "styles/theme";
import anonymous_user from "assets/anonymous_user.jpg";
import Carousel from "components/Carousel";
import { useDropzone } from "react-dropzone";
import { IoMdImages } from "react-icons/io";
import instagram_05 from "assets/instagram_05.png";
import instagram_06 from "assets/instagram_05.png";
import instagram_07 from "assets/instagram_05.png";
import { useDispatch } from "react-redux";
import { __postPosts } from "redux/modules/postsSlice";

const Form = ({ handleOpenModal, onChangeHandler }) => {
  const [text, setText] = useState({
    content: "",
  });
  const [files, setFiles] = useState([]);

  const MAX_POSTS = 3;
  const dispatch = useDispatch();
  const username = "test_samsta";

  const onSubmitHandler = (text) => {
    dispatch(__postPosts(text));
  };

  const handleChange = (e) => {
    const { value } = e.target;
    const val = value.substr(0, 200);
    setText({
      ...text,
      content: val,
    });
  };

  // const imgArr = [instagram_05, instagram_06, instagram_07];

  /* DROPZONE ----------------------------------------------------------------- */
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: MAX_POSTS,
    accept: {
      "image/jpg": [".jpg"],
      "image/jpeg": [".jpeg"],
      "image/png": [".png"],
    },
    onDrop: (acceptedFiles) => {
      acceptedFiles.length > MAX_POSTS
        ? window.alert("사진은 3장까지 업로드할 수 있습니다.")
        : setFiles(
            acceptedFiles.map((file) =>
              Object.assign(file, {
                preview: URL.createObjectURL(file),
              })
            )
          );
    },
  });

  console.log(files);

  // const thumbs = files.map((file) => (
  //   <div style={thumb} key={file.name}>
  //     <div style={thumbInner}>
  //       <img
  //         alt="drag&amp;drop"
  //         src={file.preview}
  //         style={img}
  //         // Revoke data uri after image is loaded
  //         onLoad={() => {
  //           URL.revokeObjectURL(file.preview);
  //         }}
  //       />
  //     </div>
  //   </div>
  // ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  // console.log(files);

  return (
    <DetailContainer>
      <DetailHeader>
        <Button variant="arrow" onClickHandler={handleOpenModal} />
        <h2>새 게시물 만들기</h2>
        <Button variant="text">공유하기</Button>
      </DetailHeader>
      <DetailBody>
        <StImage>
          {files.length === 0 && (
            <section className="container">
              <StUpload {...getRootProps({ className: "dropzone" })}>
                <p>
                  <IoMdImages size="60px" color={`${colors.black}`} />
                  사진과 동영상을 여기에 끌어다 놓으세요
                </p>
              </StUpload>
            </section>
          )}
          {files.length !== 0 && (
            <Carousel length="640px">
              {files.map((file) => file.preview)}
            </Carousel>
          )}
        </StImage>
        <StContent>
          <StUser>
            <StImg>
              <img alt="user" src={anonymous_user} />
            </StImg>
            <StName>{username}</StName>
          </StUser>
          <StTextarea
            id="samsta-textarea"
            name="content"
            rows="12"
            cols="30"
            value={text}
            placeholder="내용을 입력해주세요 (200자 이내)"
            onChange={handleChange}
          ></StTextarea>
        </StContent>
      </DetailBody>
    </DetailContainer>
  );
};

export default Form;

const DetailContainer = styled.div`
  width: 100%;
`;

const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 50px;
  padding: 0 20px;

  h2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: 500;
  }

  input {
    padding: 10px;
  }

  button {
    color: ${colors.blue};
    font-weight: 500;
  }
`;

const DetailBody = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const StImage = styled.div`
  width: 640px;
  height: 640px;

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

const StUpload = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${colors.gray2};
  cursor: pointer;

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    font-size: 22px;
    font-weight: 300;
  }
`;

const StContent = styled.div`
  padding-left: 12px;
  display: flex;
  flex-direction: column;
  width: 360px;
`;

const StUser = styled.div`
  display: flex;
  align-items: center;
  width: 360px;
  height: 60px;
  gap: 10px;
`;

const StImg = styled.div`
  display: flex;
  width: 32px;

  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const StName = styled.div`
  font-weight: 600;
`;

const StTextarea = styled.textarea`
  width: 100%;
  border: none;

  ::placeholder {
    font-weight: 300;
  }
`;
