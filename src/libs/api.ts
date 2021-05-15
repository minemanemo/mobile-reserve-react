import axios from 'axios';

export const postCoupon = (phoneNumber: string) =>
  axios.post('/api/v1/coupon', { phoneNumber });

export const getCoupons = (page: number, pageSize: number) =>
  axios.get('/api/v1/coupon', { params: { page, pageSize } });
