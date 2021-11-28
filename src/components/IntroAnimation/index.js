import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { respondTo } from '../../utils/responsive';

const IntroAnimation = () => {
  const [ animationStatus, setAnimationStatus ] = useState('stop');
  
  function handleClickAnimation() {
    setAnimationStatus('start');
    setTimeout(() => {
      setAnimationStatus('end');
    }, 3500);
  }
  
  return (
    <Root status={animationStatus} onClick={handleClickAnimation}>
      <Left status={animationStatus}><img src="/images/intro-1.png" alt="" /></Left>
      <Right status={animationStatus}><img src="/images/intro-2.png" alt="" /></Right>
      <House status={animationStatus}><img src="/images/intro-3.png" alt="" /></House>
      <Door status={animationStatus}><img src="/images/intro-4.png" alt="" /></Door>
      <Yama status={animationStatus}><img src="/images/intro-5.png" alt="" /></Yama>
      <Back status={animationStatus}><img src="/images/intro-6.png" alt="" /></Back>
    </Root>
  )
}


const RootAnimation = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`
const Root = styled.div`
  position: fixed;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: black;
  cursor: pointer;
  ${respondTo.md} {
    display: none !important;
  }
  ${({ status }) => status === 'start' && css `
    animation: ${RootAnimation} .5s ease 3s;
  `}
  ${({ status }) => status === 'end' && css `
    display: none;
  `}
`

const Img = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  animation-play-state: paused !important;
  ${({ status }) => status === 'start' && css `
    animation-play-state: running !important;
  `}
  > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const LeftAnimation = keyframes`
  from { transform: translateX(0) }
  to { transform: translateX(-100%) }
`

const Left = styled(Img)`
  z-index: 5;
  animation: ${LeftAnimation} 3s ease forwards;
`

const RightAnimation = keyframes`
  from { transform: translateX(0) }
  to { transform: translateX(100%) }
`

const Right = styled(Img)`
  z-index: 4;
  animation: ${RightAnimation} 3s ease forwards;
`

const HouseAnimation = keyframes`
  from { transform: scale(1) }
  50% { transform: scale(2) }
  to { transform: scale(15) }
`

const House = styled(Img)`
  z-index: 3;
  animation: ${HouseAnimation} 3s ease forwards;
  transform-origin: 50% 70%;
`

const DoorAnimation = keyframes`
  from { transform: scale(1) translateX(0) }
  50% { transform: scale(2) translateX(10%) }
  to { transform: scale(15) translateX(10%) }
`

const Door = styled(Img)`
  z-index: 2;
  animation: ${DoorAnimation} 3s ease forwards;
  transform-origin: 50% 70%;
`

const YamaAnimation = keyframes`
  from { transform: scale(1) translateX(0%)}
  50% { transform: scale(2) translateX(-10%)}
  to { transform: scale(15) translateX(-10%)}
`

const Yama = styled(Img)`
  z-index: 1;
  animation: ${YamaAnimation} 3s ease forwards;
`

const Back = styled(Img)`
  z-index: 0;

`

export default IntroAnimation