import React, { useState } from 'react';
import {
  ReservationWrapper,
  ReservationContent,
  ReservationButton,
} from '@components/Content';
import { ReserveWindow } from '@components/Modal/ReserveWindow';
import { postCoupon } from '@libs/api';
import gameLogo from '@asset/epic7.png';

const Reservation = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);
  const handleReserve = async (phoneNumber: string) => {
    try {
      const response = await postCoupon(phoneNumber);
      console.log(response);
      // TODO: show coupon number
    } catch (e) {
      const { status, data } = e.response;
      switch (status) {
        case 409:
          // TODO: show Modal
          console.log(data.couponNumber);
          break;
        default:
          console.log(e.message);
          break;
      }
    } finally {
      handleClickClose();
    }
  };

  return (
    <ReservationWrapper>
      {open && (
        <ReserveWindow onSubmit={handleReserve} onClose={handleClickClose} />
      )}
      <ReservationContent>
        <img src={gameLogo} alt="" />
        <ReservationButton onClick={handleClickOpen}>
          사전 예약 바로가기
        </ReservationButton>
      </ReservationContent>
    </ReservationWrapper>
  );
};

export default Reservation;
