import React, { useEffect } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { generateCouponQuery } from '@atom/coupon';
import { CouponWrapper, CouponContent } from '@components/Content';
import { getDateTimeString } from '@libs/time';
import { Coupon } from '@type/index';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CouponContainer = () => {
  const data = useRecoilValue<Coupon[]>(generateCouponQuery);
  const refreshList = useResetRecoilState(generateCouponQuery);

  useEffect(() => {
    refreshList();
  }, []);

  return (
    <CouponWrapper>
      <CouponContent>
        <div style={{ width: '580px', margin: '0 auto' }}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>순번</TableCell>
                  <TableCell>휴대폰 번호</TableCell>
                  <TableCell>쿠폰 번호</TableCell>
                  <TableCell>발급 일시</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((item) => {
                  return (
                    <TableRow key={item.sequence}>
                      <TableCell>{item.sequence}</TableCell>
                      <TableCell>{item.phoneNumber}</TableCell>
                      <TableCell>{item.couponNumber}</TableCell>
                      <TableCell>
                        {getDateTimeString(new Date(item.createDate))}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CouponContent>
    </CouponWrapper>
  );
};

export default CouponContainer;
