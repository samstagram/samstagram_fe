import styled, { css } from 'styled-components';
import { colors } from 'styles/theme';
import { BsX, BsTrash, BsArrowLeft, BsGoogle } from 'react-icons/bs';
import { FiPlusSquare } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { MdHomeFilled } from 'react-icons/md';

// variant : xBtn, home, plus, arrow, comment, heart_outline, heart_filled, trash, google, text_outline, text_filled
// size : small(팔로우), medium(게시, 공유하기), large(소셜로그인)
const Button = ({ children, size, variant, type, onClickHandler }) => {
  return (
    <StButton
      size={size}
      variant={variant}
      type={type}
      onClick={onClickHandler}
    >
      {variant === 'xBtn' && <BsX size="24px" color={`${colors.black}`} />}
      {variant === 'home' && (
        <MdHomeFilled size="24px" color={`${colors.black}`} />
      )}
      {variant === 'plus' && (
        <FiPlusSquare size="24px" color={`${colors.black}`} />
      )}
      {variant === 'arrow' && (
        <BsArrowLeft size="24px" color={`${colors.black}`} />
      )}
      {variant === 'comment' && (
        <FaRegComment size="24px" color={`${colors.black}`} />
      )}
      {variant === 'heart_outline' && (
        <AiOutlineHeart size="24px" color={`${colors.black}`} />
      )}
      {variant === 'heart_filled' && (
        <AiFillHeart size="24px" color={`${colors.red}`} />
      )}
      {variant === 'trash' && <BsTrash size="24px" color={`${colors.black}`} />}
      {variant === 'google' && (
        <BsGoogle size="24px" color={`${colors.black}`} />
      )}
      {variant === 'text_outline' && <span size={size}>{children}</span>}
      {variant === 'text_filled' && <span size={size}>{children}</span>}
    </StButton>
  );
};

Button.defaultProps = {
  children: 'button', // 버튼 내부 텍스트
  size: 'large', // 버튼 크기
  variant: 'xBtn', // 버튼 종류
  type: 'button', // 버튼
  onClickHandler: null, // onClick EventHandler
};

export default Button;

const StButton = styled.button`
  padding: 4px;
  border: none;
  background-color: transparent;

  span {
    font-size: ${({ size }) => {
      if (size === 'small') return '12px';
      else if (size === 'medium') return '14px';
      else if (size === 'large') return '16px';
    }};
    font-weight: 500;
  }

  ${({ variant }) => {
    return (
      variant === 'text_outline' &&
      css`
        border: none;
        color: ${colors.blue};
        text-align: center;
      `
    );
  }}

  ${({ variant }) => {
    return (
      variant === 'text_filled' &&
      css`
        padding: 6px 8px;
        border: none;
        border-radius: 5px;
        color: ${colors.white};
        background-color: ${colors.blue};
        text-align: center;
      `
    );
  }}
`;
