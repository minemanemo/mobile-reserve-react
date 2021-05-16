import React, { ChangeEvent, useState } from 'react';

import Button from '@components/Button';
import { Dimmed } from './Dimmed';
import { Wrapper, Title, Description, Label } from './StyledComponent';
import Input from '@components/Input';
import Checkbox from '@components/Checkbox';

interface ReserveWindowProps {
  onSubmit: (phoneNumber: string) => void;
  onClose: () => void;
}

export const ReserveWindow = (props: ReserveWindowProps) => {
  const { onSubmit, onClose } = props;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [individual, setIndividual] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const phoneRegex = /^\d{3}\d{4}\d{4}$/.exec(phoneNumber);
  const disableButton = !phoneRegex || !individual;

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = () => onSubmit(phoneNumber);
  const handleChangePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.currentTarget.value);
  const handleChangeIndividual = (e: ChangeEvent<HTMLInputElement>) =>
    setIndividual(e.target.checked);
  const handleChangeMarketing = (e: ChangeEvent<HTMLInputElement>) =>
    setMarketing(e.target.checked);

  return (
    <Dimmed onClick={handleClose}>
      <Wrapper>
        <Title>에픽 세븐 사전 예약</Title>
        <Description>
          휴대폰 정보를 입력하여 사전 예약을 완료해주세요.
        </Description>
        <Input value={phoneNumber} onChange={handleChangePhoneNumber} />
        <Label htmlFor="individual">
          <Checkbox
            id="individual"
            checked={individual}
            onChange={handleChangeIndividual}
          />
          개인정보 수집 및 이동 동의 (필수)
        </Label>
        <Label htmlFor="marketing">
          <Checkbox
            id="marketing"
            checked={marketing}
            onChange={handleChangeMarketing}
          />
          광고 수신 동의
        </Label>
        <Button
          buttonStyle="square"
          onClick={handleSubmit}
          disabled={disableButton}
        >
          사전 예약
        </Button>
      </Wrapper>
    </Dimmed>
  );
};
