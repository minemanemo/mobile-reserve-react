import React, { useState } from 'react';
import {
  ReservationWrapper,
  ReservationContent,
  ReservationButton,
} from '@components/Content';
import { ReserveWindow } from '@components/Modal/ReserveWindow';
import { postCoupon } from '@libs/api';

const Reservation = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);
  const handleReserve = async (phoneNumber: string) => {
    const response = await postCoupon(phoneNumber);
    console.log(
      '🚀 ~ file: Reservation.tsx ~ line 17 ~ handleReserve ~ response',
      response,
    );

    // TODO: duplicate check
    // TODO: Success check & show coupon Number
    handleClickClose();
  };

  return (
    <ReservationWrapper>
      {open && (
        <ReserveWindow onSubmit={handleReserve} onClose={handleClickClose} />
      )}
      <ReservationContent>
        <img
          src="https://w.namu.la/s/0a9f36dd9d80900e2121260193c6c5d2fc5ddb2fa939ae3beb327f1b5bc1e2210667e0772eeb576d312849d47f0334bcde9f97f6c6344f01bac0ea872b1987cafb9af84c75343b4ebdd13111dd59608007a815db40bc8532bb8fe6ef18bb3a41f6bc0e2e7acc39832124c2a7a3df56b0"
          alt=""
        />
        <ReservationButton onClick={handleClickOpen}>
          사전 예약 바로가기
        </ReservationButton>
      </ReservationContent>
    </ReservationWrapper>
  );
};

export default Reservation;
