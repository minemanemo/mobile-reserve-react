import styled from 'styled-components';

const Checkbox = styled.input.attrs((props) => ({
  type: 'checkbox',
  ...props,
}))`
  cursor: pointer;
`;

export default Checkbox;
