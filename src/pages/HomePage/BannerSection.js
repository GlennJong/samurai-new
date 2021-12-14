import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes, css } from 'styled-components';
import { RadiusButton } from '../../components/RadiusButton';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const BannerSection = () => {
  const [ loaded, setLoaded ] = useState(false);
  const wording = _w('homepage.banner');
  
  useEffect(() => {
    const resouces = [
      '/images/homepage-banner-head.png',
      '/images/homepage-banner-center.png',
      '/images/homepage-banner-left.png',
      '/images/homepage-banner-right.png',
      '/images/homepage-banner-front.png',
      '/images/homepage-banner-bottom.png'
    ];
    handleLoadBanner(resouces);
  }, [])
  
  function handleLoadBanner(resouces) {
    let count = 0;

    resouces.forEach(item => load(item));
    
    function load(url) {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        count += 1
        if (count === resouces.length) {
          setLoaded(true);
        }
      };
    }
  }

  return (
    <Root>
      <Banner start={loaded}>
        <img className="background" src="/images/homepage-banner-background.png" />
        <div className="head"><img src="/images/homepage-banner-head.png" /></div>
        <div className="center"><img src="/images/homepage-banner-center.png" /></div>
        <div className="left"><img src="/images/homepage-banner-left.png" /></div>
        <div className="right"><img src="/images/homepage-banner-right.png" /></div>
        <div className="front"><img src="/images/homepage-banner-front.png" /></div>
        <div className="bottom"><img src="/images/homepage-banner-bottom.png" /></div>
      </Banner>
      {/* <Banner src={wording.photo} /> */}
      <Buttonbar>
        <RadiusButton as={Link} to="/?to=gallery">{ wording.button }</RadiusButton>
      </Buttonbar>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  z-index: 1;
`

const slideFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

const slideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`

const slideFromTop = keyframes`
  from {
    transform: translateY(-100px);
  }
  to {
    transform: translateY(0px);
  }
`

const wave = keyframes`
  from {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0);
  }
`

const ramen = keyframes`
  from {
    transform: perspective(500px) rotateY(6deg)
  }
  to {
    transform: perspective(500px) rotateY(-6deg)
  }
`

const Banner = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: auto;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  .background {
    width: 100%;
    height: auto;

    opacity: 0;
    ${({ start }) => start && css`opacity: 1;`}
  } 
  .head, .center, .left, .right, .front, .bottom {
    position: absolute;

    display: none;
    ${({ start }) => start && css`display: block;`}
  }
  .front {
    left: 0;
    top: 0;
    width: 100%;
    z-index: 5;
  }
  .bottom {
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 3;
  }
  .left {
    left: 0;
    bottom: 0;
    z-index: 4;
    animation: ${slideFromLeft} 1s ease forwards;
    max-width: 33%;
  }
  .right {
    right: 0;
    bottom: 0;
    z-index: 4;
    animation: ${slideFromRight} 1s ease forwards;
    max-width: 33%;
  }
  .head {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
    animation: ${slideFromTop} 1s ease forwards;
    img {
      animation: ${wave} 2.5s linear infinite;
    }
  }
  .center {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 3;
    img {
      animation: ${ramen} 1.25s linear infinite alternate-reverse;
    }
  }
`

const Buttonbar = styled.div`
  position: absolute;
  left: 0;
  bottom: 48px;
  width: 100%;
  text-align: center;
  z-index: 6;
  ${respondTo.md} {
    display: none;
  }
`

export default BannerSection