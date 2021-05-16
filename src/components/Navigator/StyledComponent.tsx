import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: #655c59;
  z-index: 1000;
`;

export const Wrapper = styled.div`
  min-width: 400px;
  max-width: 820px;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

// TODO: download contents
export const Logo = styled.h1`
  width: 100px;
  height: 80px;
  background: url('http://smilegate-intern.co.kr/@resources/images/logo.png') 0
    center no-repeat;
  background-size: 100px auto;
`;

export const NavigationList = styled.ul`
  display: flex;

  & > li:not(:first-child) {
    margin-left: 60px;
  }
`;

export const NavigationListItem = styled.li`
  color: #ffffff;
  font-weight: 700;

  & > a {
    text-decoration: none;
    color: inherit;
  }
`;
