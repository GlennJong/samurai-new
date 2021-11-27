import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const MintButton = () => {
  return (
    <Root>Mint</Root>
  )
}

const Root = styled.button`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border: 0;
  border-top: 1px solid ${colors.white};
  border-radius: 0;
  padding: 32px 0;
  background: ${colors.black};
  color: ${colors.white};
  font-size: 16px;
  text-transform: uppercase;

  display: none;
  ${respondTo.md} {
    display: block;
  }
`

export default MintButton;