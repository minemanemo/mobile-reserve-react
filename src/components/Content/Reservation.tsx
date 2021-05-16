import styled from 'styled-components';
import img from '@asset/illust.png';

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
