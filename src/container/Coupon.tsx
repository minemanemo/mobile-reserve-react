import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { generateCouponQuery } from '@atom/coupon';

interface Data {
  sequence: number;
  phoneNumber: string;
  couponNumber: string;
  createTime: string;
}

const CouponContainer = () => {
  const list = useRecoilValue<Data[]>(generateCouponQuery);
  const refreshList = useResetRecoilState(generateCouponQuery);

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <div>
      <h2>Coupon</h2>
      <table>
        <thead>
          <tr>
            <th>Sequence</th>
            <th>phoneNumber</th>
            <th>couponNumber</th>
            <th>CreateTime</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.sequence}>
              <td>{item.sequence}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.couponNumber}</td>
              <td>{item.createTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CouponContainer;
