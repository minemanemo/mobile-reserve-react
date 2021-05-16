import React from 'react';

import {
  MainText,
  SubText,
  Wrapper,
} from '@components/Global/StyledComponents';
import Button from '@components/Button';

interface Props {
  title?: string;
  message?: string;
  onClose: () => void;
  onClickButton?: () => void;
}

const Alert: React.FC<Props> = ({
  title,
  message,
  onClose,
  onClickButton,
}: Props) => {
  const handleClick = () => {
    if (onClickButton) onClickButton();
    onClose();
  };

  return (
    <Wrapper>
      <MainText style={{ marginTop: '15px' }}>{title}</MainText>
      {message && <SubText style={{ margin: '20px 0' }}>{message}</SubText>}
      <Button onClick={handleClick}>확인</Button>
    </Wrapper>
  );
};

export default Alert;
