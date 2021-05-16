import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { generateCouponQuery } from '@atom/coupon';
import { CouponWrapper, CouponContent, CouponTitle } from '@components/Content';
import { getDateTimeString } from '@libs/time';

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
    <CouponWrapper>
      <CouponContent>
        <CouponTitle>예약 현황</CouponTitle>
        <Styles>
          <table>
            <thead>
              <tr>
                <th>순번</th>
                <th>휴대폰 번호</th>
                <th>쿠폰 번호</th>
                <th>발급 일시</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item) => {
                return (
                  <tr key={item.sequence}>
                    <td>{item.sequence}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.couponNumber}</td>
                    <td>{getDateTimeString(new Date(item.createTime))}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Styles>
      </CouponContent>
    </CouponWrapper>
  );
};

export default CouponContainer;

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      ${
        '' /* :first-child {
        td {
          border-top: 1px solid black;
        }
      } */
      }

      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }

    tfoot {
      tr:first-child {
        td {
          border-top: 2px solid black;
        }
      }
      font-weight: bolder;
    }
  }
`;
