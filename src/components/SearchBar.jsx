import styled from "styled-components";
import Input from "components/elements/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "shared/cookie";
import { BASE_URL } from "shared/api";
import { useDispatch, useSelector } from "react-redux";
import { __getHashtagPost, __getPosts } from "redux/modules/postsSlice";
import { BsHash } from "react-icons/bs";
import { colors } from "styles/theme";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [dataList, setDataList] = useState([]);
  const [contentNum, setContentNum] = useState(0);

  const { posts, hasMore, keyword } = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, [dispatch, posts]);

  const fetchData = async () => {
    const res = await axios({
      method: "get",
      url: `${BASE_URL}/api/articles/hashtag`,
      headers: {
        "Content-Type": "application/json",
        Authorization: getCookie("mycookie"),
      },
    });
    setDataList(res.data);
  };

  const handleChange = (e) => {
    setSearchText(e.target.value);
    setContentNum(0);
    dataList.map((data) => {
      const text = data.hashtagList.toString();

      if (text.toLowerCase().includes(e.target.value.toLowerCase())) {
        setContentNum((contentNum) => contentNum + 1);
      }
    });

    e.target.value === "" && __getPosts(1);
  };

  const handleClick = () => {
    dispatch(__getHashtagPost(searchText));
    setContentNum(0);
    setSearchText("");
  };

  return (
    <StSearch>
      <Input
        variant="header"
        text="검색"
        value={searchText}
        onChangeHandler={handleChange}
      />
      {searchText ? (
        <StResult onClick={handleClick}>
          <StHashtag>
            <BsHash size="20px" />
          </StHashtag>
          <StText>
            <StSearchText>{`#${searchText}`}</StSearchText>
            <StNum>{`게시물 ${contentNum}`}</StNum>
          </StText>
        </StResult>
      ) : null}
    </StSearch>
  );
};

export default SearchBar;

const StSearch = styled.div`
  position: relative;
`;

const StResult = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: absolute;
  background-color: ${colors.white};
  border-top: none;
  border-radius: 4px;
  padding: 6px;
  gap: 6px;
  cursor: pointer;
`;

const StHashtag = styled.div`
  border: 1px solid ${colors.gray2};
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 50%;
`;

const StText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: flex-start;
`;

const StSearchText = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const StNum = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
