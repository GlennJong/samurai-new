import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';
import { Twitter, Medium, Discord } from '../Icons';

const Footer = () => {
  const wording = _w('footer');

  return (
    <Root>
      <Container>
        <LinkList>
          { wording.links.map((item, i) =>
            <div key={i}>
              <Link to={item.to}>{item.title}</Link>
            </div>
          ) }
        </LinkList>
        <Side>
          <SocialList>
            { wording.socials.map((social, i) =>
              <SocialItem key={i} icon={social.icon} href={social.link} target="_blank" />
            ) }
          </SocialList>
          <FileLink href="">WHITE PAPER</FileLink>
        </Side>
      </Container>
    </Root>
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

const Root = styled.div`
  padding-top: 90px;
  padding-bottom: 192px;
  background: #272727;
  ${respondTo.md} {
    padding-top: 50px;
    padding-bottom: 180px;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 1024px;
  max-width: 100%;
  ${respondTo.md} {
    display: block;
  }
`

const LinkList = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${respondTo.md} {
    display: block;
  }
  > div {
    width: 50%;
    margin-bottom: 24px;
    ${respondTo.md} {
      width: 100%;
      text-align: center;
    }
    a {
      color: ${colors.white};
      font-size: 24px;
      font-weight: 500;
      opacity: 0.3;
      transition: opacity .3s ease;
      ${respondTo.md} {
        opacity: 1;
        text-decoration: underline;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
`

const Side = styled.div`
  text-align: right;
  ${respondTo.md} {
    display: none;
  }
`

const FileLink = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  font-size: 24px;
  opacity: .3;
  transition: opacity .3s ease;
  &:hover {
    opacity: 1;
  }
`

const SocialList = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 72px;
  ${respondTo.lg} {
    width: 100%;
    justify-content: center;
  }
`

const Item = styled.a`
  display: flex;
  align-items: center;
  color: ${colors.white};
  opacity: .3;
  width: 60px;
  transition: opacity .3s ease;
  &:hover {
    opacity: 1;
  }
  ${respondTo.lg} {
  }
  svg {
    width: 100%;
    height: auto;
  }
  & + a {
    margin-left: 40px;
    ${respondTo.lg} {
      margin-left: 12px;
    }
  }
`

export default Footer;