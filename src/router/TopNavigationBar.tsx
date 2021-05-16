import React from 'react';
import { Link } from 'react-router-dom';
import {
  Header,
  Logo,
  NavigationList,
  NavigationListItem,
  Wrapper,
} from '@components/Navigator';

const TopNavigationBar = () => {
  return (
    <Header>
      <Wrapper>
        <Logo />
        <nav>
          <NavigationList>
            <NavigationListItem>
              <Link to="/reservation">사전 예약</Link>
            </NavigationListItem>
            <NavigationListItem>
              <Link to="/coupon">예약 현황</Link>
            </NavigationListItem>
          </NavigationList>
        </nav>
      </Wrapper>
    </Header>
  );
};

export default TopNavigationBar;
