import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from '../../utils/responsive';

const LinksList = ({ data, onLinkClick, ...props }) => {
  return (
    <List {...props}>
      { data.map((link, i) =>
        <LinkItem key={i} onClick={onLinkClick} to={link.to}>{ link.title }</LinkItem>
      ) }
    </List>
  )
}

const List = styled.div`
  display: flex;
  ${respondTo.lg} {
    display: block;
    text-align: center;
    margin-bottom: 80px;
  }
`

const LinkItem = styled(Link)`
  display: block;
  margin-right: 40px;
  font-size: 16px;
  transition: color .3s ease;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    ${'' /* color: ${ colors.red }; */}
  }
  ${respondTo.lg} {
    margin: 0;
    font-size: 36px;
  }

  ${({ showForMobile }) => showForMobile && css`
    display: none;
  `}

  ${ respondTo.lg } {
    padding: 0;
    margin-bottom: 50px;
    font-size: 18px;
    font-weight: 600;

    ${({ showForMobile }) => showForMobile && css`
      display: block;
    `}
  }
`

export default LinksList;