import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #29292b;
  min-width: 400px;
  max-width: 700px;
  padding: 40px 80px;
  color: #d5d1cc;
  text-align: center;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  padding: 10px 0;
`;

export const Description = styled.p`
  font-size: 14px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  color: #7d7d7d;
  font-size: 14px;
  text-align: left;
  margin-bottom: 10px;
  cursor: pointer;

  display: flex;
  align-items: center;

  & > input {
    margin-right: 5px;
  }
`;
