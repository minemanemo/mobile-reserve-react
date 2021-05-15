import React from 'react';
import { Link } from 'react-router-dom';

const TopNavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/about">Home</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/coupon">Coupon</Link>
        </li>
      </ul>
    </nav>
  );
};

export default TopNavigationBar;
