import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RadiusButton } from '../../components/RadiusButton';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const BannerSection = () => {
  const wording = _w('homepage.banner')
  
  return (
    <Root>
      <Banner src={wording.photo} />
      <Buttonbar>
        <RadiusButton as={Link} to="/?to=gallery">{ wording.button }</RadiusButton>
      </Buttonbar>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
`

const Banner = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

const Buttonbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 48px;
  width: 100%;
  text-align: center;
  ${respondTo.md} {
    display: none;
  }
`

export default BannerSection