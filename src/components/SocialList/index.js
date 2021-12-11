import React from 'react';
import styled, { css } from 'styled-components';
import { respondTo } from '../../utils/responsive';
import { Twitter, Medium, Discord } from '../Icons';

const SocialList = ({ data, mobile, ...props }) => {
  return (
    <List mobile={mobile} {...props}>
      { data.map((social, i) =>
        <SocialItem key={i} icon={social.icon} href={social.link} target="_blank" />
      ) }
    </List>
  )
}

const SocialItem = ({icon, ...props}) => {
  return (
    <Item {...props}>
      { icon === 'Twitter' && <Twitter /> }
      { icon === 'Medium' && <Medium /> }
      { icon === 'Discord' && <Discord /> }
    </Item>
  )
}

const List = styled.div`
  display: flex;
  align-items: center;
  margin: 0 18px;
  ${respondTo.lg} {
    width: 100%;
    justify-content: center;
  }
  ${({ mobile }) => mobile && css`
    display: none;
    ${respondTo.lg} {
      display: flex;
      width: auto;
      margin-left: 0;
    }
  `}
`
const Item = styled.a`
  display: flex;
  align-items: center;
  ${respondTo.lg} {
    width: 24px;
  }
  & + a {
    margin-left: 24px;
    ${respondTo.lg} {
      margin-left: 12px;
    }
  }
`

export default SocialList;