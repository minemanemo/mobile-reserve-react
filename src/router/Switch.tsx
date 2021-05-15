import React from 'react';
import { Switch as RouterSwitch, Route } from 'react-router-dom';

import About from '@container/About';
import Reservation from '@container/Reservation';
import Coupon from '@container/Coupon';

const Switch = () => (
  <RouterSwitch>
    <Route path="/about" component={About} />
    <Route path="/reservation" component={Reservation} />
    <Route path="/coupon" component={Coupon} />
  </RouterSwitch>
);

export default Switch;
