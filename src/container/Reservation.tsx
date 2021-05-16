import React, { useState } from 'react';
import useAlert from '@components/Global/useAlert';
import Button from '@components/Button';
import { ReservationWrapper, ReservationContent } from '@components/Content';
import { ReserveWindow } from '@components/Modal/ReserveWindow';
import { postCoupon } from '@libs/api';
import gameLogo from '@asset/epic7.png';

const Reservation = () => {
  const alert = useAlert();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);
  const handleReserve = async (phoneNumber: string) => {
    try {
      const response = await postCoupon(phoneNumber);
      // TODO: api server check
      alert.open('사전 예약이 완료되었습니다.', `쿠폰 번호 : ${response.data}`);
    } catch (e) {
      const { status, data } = e.response;
      switch (status) {
        case 409:
          alert.open(
            '이미 사전 예약 완료 하셨습니다.',
            `쿠폰 번호 : ${data.couponNumber}`,
          );
          break;
        default:
          alert.open('ERROR', e.message);
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
        <Button onClick={handleClickOpen} fontSize={35} fontWeight={700}>
          사전 예약 바로가기
        </Button>
      </ReservationContent>
    </ReservationWrapper>
  );
};

export default Reservation;
