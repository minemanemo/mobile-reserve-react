import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  generateCouponQuery,
  couponListPageState,
  couponListPageSizeState,
} from '@atom/coupon';
import { CouponWrapper, CouponContent } from '@components/Content';
import { getDateTimeString } from '@libs/time';

import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface Row {
  sequence: number;
  phoneNumber: string;
  couponNumber: string;
  issuedDate: string;
}
interface Data {
  content: Row[];
  totalElements: number;
}

const CouponContainer = () => {
  const data = useRecoilValue<Data>(generateCouponQuery);
  const refreshList = useResetRecoilState(generateCouponQuery);
  const [page, setPage] = useRecoilState(couponListPageState);
  const [pageSize, setPageSize] = useRecoilState(couponListPageSizeState);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    p: number,
  ) => {
    setPage(p);
  };

  const handleChangePageSize = (e: any) => {
    setPage(0);
    setPageSize(e.target.value);
  };

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
                {data.content.map((item) => {
                  return (
                    <TableRow key={item.sequence}>
                      <TableCell>{item.sequence}</TableCell>
                      <TableCell>{item.phoneNumber}</TableCell>
                      <TableCell>{item.couponNumber}</TableCell>
                      <TableCell>
                        {getDateTimeString(new Date(item.issuedDate))}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>

            <TablePagination
              component="div"
              count={data.totalElements}
              page={page}
              onChangePage={handleChangePage}
              rowsPerPage={pageSize}
              rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 100]}
              onChangeRowsPerPage={handleChangePageSize}
            />
          </TableContainer>
        </div>
      </CouponContent>
    </CouponWrapper>
  );
};

export default CouponContainer;
