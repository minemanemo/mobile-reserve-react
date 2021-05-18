import React from 'react';
import { Switch as RouterSwitch, Route, Redirect } from 'react-router-dom';

import Reservation from '@container/Reservation';
import Coupon from '@container/Coupon';

const Switch = () => (
  <RouterSwitch>
    <Route path="/reservation" component={Reservation} />
    <Route path="/coupon" component={Coupon} />
    <Redirect from="*" to="/reservation" />
  </RouterSwitch>
);

export default Switch;
