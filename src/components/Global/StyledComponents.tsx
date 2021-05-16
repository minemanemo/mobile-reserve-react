import styled from 'styled-components';

export const Black = styled.div`
  /* 레이아웃 - 화면 꽉 채움 */
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;

  /* 레이어 */
  z-index: 1100;

  /* 색상 */
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  padding: 30px 0;
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  align-items: center;

  & .MuiSvgIcon-root {
    color: #999999;
    font-size: 50px;
  }
`;

export const MainText = styled.span`
  font-size: 20px;
  color: #121212;
`;

export const SubText = styled.p`
  margin: 0 10px;
  font-size: 14px;
  color: #666666;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-height: 16px;
  max-height: 32px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
