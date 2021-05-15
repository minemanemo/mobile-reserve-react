import React, { useEffect } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { phoneNumberState } from '@atom/reservation';
import { postCoupon } from '@libs/api';

const Reservation = () => {
  const [phoneNumber, setPhoneNumber] = useRecoilState(phoneNumberState);
  const resetPhoneNumber = useResetRecoilState(phoneNumberState);

  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.currentTarget.value);
  };

  const handleClickReserve = async () => {
    const response = await postCoupon(phoneNumber);
    console.log(response);
  };

  useEffect(() => {
    resetPhoneNumber();
  }, []);

  return (
    <div>
      <h2>Reservation</h2>
      <div>
        <form>
          <label htmlFor="phoneNumber">
            휴대폰 번호:{' '}
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handleChangePhoneNumber}
            />
          </label>
          <button type="button" onClick={handleClickReserve}>
            사전 예약하기
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
