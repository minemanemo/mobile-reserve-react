import styled from 'styled-components';

const Input = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: "' - '를 제외한 휴대폰 번호를 입력해 주세요",
  ...props,
}))`
  padding: 10px 20px;
  text-align: center;
  height: 20px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
  }
`;

export default Input;
