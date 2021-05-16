import React, { useState } from 'react';
import styled from 'styled-components';
import { Dimmed } from './Dimmed';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.currentTarget.value);
  };

  const handleClick = () => {
    onSubmit(phoneNumber);
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleChangeIndividual = (e: any) => {
    setIndividual(e.target.checked);
  };

  const handleChangeMarketing = (e: any) => {
    setMarketing(e.target.checked);
  };

  return (
    <Dimmed onClick={handleClose}>
      <Wrapper>
        <Title>에픽 세븐 사전 예약</Title>
        <Description>
          휴대폰 정보를 입력하여 사전 예약을 완료해주세요.
        </Description>
        <Input value={phoneNumber} onChange={handleChange} />
        <Label htmlFor="individual-check">
          <input
            type="checkbox"
            id="individual-check"
            checked={individual}
            onChange={handleChangeIndividual}
          />
          개인정보 수집 및 이동 동의 (필수)
        </Label>
        <Label htmlFor="marketing-check">
          <input
            type="checkbox"
            id="marketing-check"
            checked={marketing}
            onChange={handleChangeMarketing}
          />
          광고 수신 동의
        </Label>
        <Button onClick={handleClick} disabled={disableButton}>
          사전 예약
        </Button>
      </Wrapper>
    </Dimmed>
  );
};

const Button = styled.button.attrs((props) => ({
  type: 'button',
  ...props,
}))`
  background-color: #fada57;
  color: #0f243a;
  height: 40px;

  &:disabled {
    background-color: gray;
    color: #ffffff;
  }
`;

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

const Wrapper = styled.div`
  background-color: #29292b;
  min-width: 400px;
  max-width: 700px;
  padding: 40px 80px;
  color: #d5d1cc;
  text-align: center;

  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  padding: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

const Label = styled.label`
  color: #7d7d7d;
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;

  display: flex;
  align-items: center;

  & > input {
    margin-right: 5px;
  }
`;
