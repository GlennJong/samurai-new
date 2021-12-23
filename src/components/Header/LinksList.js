import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { respondTo } from '../../utils/responsive';
import { useSelector } from 'react-redux';
import { colors } from '../../constants/colors';

const LinksList = ({ data, onLinkClick, ...props }) => {
  const { spy } = useSelector(state => state.scrollSpy);

  return (
    <List {...props}>
      { data.map((link, i) =>
        <LinkItem key={i} onClick={onLinkClick} to={link.to} active={link.spy && spy === link.spy}>{ link.title }</LinkItem>
      ) }
    </List>
  )
}

const List = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${respondTo.lg} {
    display: block;
    text-align: center;
    margin-bottom: 80px;
  }
`

const LinkItem = styled(Link)`
  display: flex;
  align-items: center;
  position: relative;
  margin-right: 20px;
  padding: 0 10px;
  height: 100%;
  font-size: 16px;
  transition: color .3s ease;
  &:last-child {
    margin-right: 0;
  }
  &:before {
    content: "";
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${colors.white};
    transition: opacity .3s ease;
  }
  ${({ active }) => active && css`
    &:before {
      opacity: 1;
    }
  `}
  
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