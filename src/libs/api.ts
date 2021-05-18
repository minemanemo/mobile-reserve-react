import axios, { AxiosPromise } from 'axios';
import { Coupon } from '@type/index';

export const postCoupon = (phoneNumber: string): AxiosPromise<Coupon> =>
  axios.post('/api/v1/coupon', { phoneNumber });

export const getCoupons = (): AxiosPromise<Coupon[]> =>
  axios.get('/api/v1/coupons');
