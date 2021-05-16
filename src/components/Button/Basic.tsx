import React from 'react';
import styled from 'styled-components';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonStyle: 'round' | 'square';
  fontSize: number;
  fontWeight: number;
}

export const Button = styled.button.attrs((props: Props) => ({
  type: 'button',
  ...props,
}))`
  padding: 10px 20px;

  text-align: center;
  border: none;
  background-color: #fada57;
  color: #0f243a;

  ${(props) => props.fontSize && `font-size: ${props.fontSize}px;`}
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight};`}

  ${(props) => {
    const { buttonStyle } = props;
    switch (buttonStyle) {
      case 'square':
        return '';
      case 'round':
      default:
        return `
        box-shadow: 3px 3px 0px 0px rgb(0, 0, 0, 0.1);
        border-radius: 10px;
        `;
    }
  }}

  cursor: pointer;

  &:disabled {
    background-color: gray;
    color: #ffffff;
    cursor: none;
  }
`;
