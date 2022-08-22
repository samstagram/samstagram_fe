import styled from "styled-components";
import { ImSpinner3 } from "react-icons/im";
import { colors } from "styles/theme";

const Loading = () => {
  return (
    <LoadingContainer>
      <span>LOADING...</span>
      <ImSpinner3 className="spinner" />
    </LoadingContainer>
  );
};

export default Loading;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 300px;
  text-align: center;

  span {
    font-size: 32px;
    font-weight: 700;
    color: ${colors.black};
  }

  .spinner {
    margin: 4px;
    font-size: 32px;
    font-weight: 700;
    color: ${colors.black};

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    animation: spin 2s linear infinite;
  }
`;
