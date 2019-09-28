import styled from 'styled-components';
import { darken } from 'polished';

export const CustomButton = styled.button`
  margin: 35px 0 0;
  height: 44px;
  width: 100px;
  font-weight: bold;
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  transition: background 0.2s;
  margin: 2px 0;
  &:hover {
    background: ${darken(0.03, '#3b9eff')};
  }
`;
