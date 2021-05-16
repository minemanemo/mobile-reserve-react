import { css } from 'styled-components';

const media = {
  mobile: (args: any) => css`
    @media (max-width: 1280px) {
      ${css(args)}
    }
  `,
  desktop: (args: any) => css`
    @media (min-width: 1280px) {
      ${css(args)}
    }
  `,

  wrapper: () => css`
    margin: 0 auto;
    @media (max-width: 768px) {
      min-width: 360px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      max-width: 768px;
    }
    @media (min-width: 1025px) {
      max-width: 1024px;
    }
  `,

  box: () => css`
    @media (max-width: 768px) {
      margin-left: 28px;
      margin-right: 28px;
    }
    @media (min-width: 768px) and (max-width: 1024px) {
      margin-left: 42px;
      margin-right: 42px;
    }
    @media (min-width: 1025px) {
      margin-left: 42px;
    }
  `,
};

export default media;
