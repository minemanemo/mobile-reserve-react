import styled from 'styled-components';
import img from '@asset/illust.png';

export const Main = styled.main`
  padding-top: 80px;
  height: calc(100% - 80px);
`;

export const ReservationWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-size: auto 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${img});
  opacity: 0.85;
`;

export const ReservationContent = styled.div`
  margin: 0 auto;
  min-width: 400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const ReservationButton = styled.div`
  width: 280px;
  text-align: center;
  height: 40px;
  box-shadow: 3px 3px 0px 0px rgb(0, 0, 0, 0.1);
  background-color: #fada57;
  color: #0f243a;
  font-size: 35px;
  font-weight: 800;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const CouponWrapper = styled.div`
  padding: 35px 0;
  height: 810px;
  width: 100%;
  background-color: #fffdf7;
`;

export const CouponTitle = styled.div`
  width: 140px;
  height: 40px;
  background-color: #d5674d;
  color: #f8fccb;
  font-size: 35px;
  font-weight: 800;
  border-radius: 10px;
  margin: 0 auto;
  padding: 10px 20px;
`;

export const CouponContent = styled.div`
  margin: 0 auto;
  min-width: 400px;
  height: 100%;
`;
