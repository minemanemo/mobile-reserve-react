import { atom, selector } from 'recoil';
import { getCoupons } from '@libs/api';

const couponListTriggerState = atom({
  key: 'couponListTriggerState',
  default: 0,
});

export const couponListPageState = atom({
  key: 'couponListPageState',
  default: 0,
});

export const couponListPageSizeState = atom({
  key: 'couponListPageSizeState',
  default: 10,
});

export const generateCouponQuery = selector({
  key: 'generateCoupon',
  get: async ({ get }) => {
    get(couponListTriggerState);
    const response = await getCoupons(
      get(couponListPageState),
      get(couponListPageSizeState),
    );
    return response.data;
  },
  set: ({ set }) => {
    set(couponListTriggerState, (v) => v + 1);
  },
});
