import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const CrossoverSection = () => {
  const wording = _w('homepage.crossover')
  
  return (
    <Root>
      <Title>crossover</Title>
      <Photo>
        <img src={wording.photo} alt="" />
      </Photo>
      <Content>{ wording.content }</Content>
    </Root>
  )
}

const Root = styled.div`
  margin: 0 auto;
  border-top: 1px solid #4D4D4D;
  padding: 0 34px;
  padding-top: 180px;
  padding-bottom: 180px;
  width: 1438px;
  max-width: 100%;
  box-sizing: border-box;
  ${respondTo.md} {
    padding-top: 60px;
    padding-bottom: 96px;
  }
`

const Title = styled.div`
  margin-bottom: 60px;
  font-size: 80px;
  font-weight: 900;
  text-align: center;
  color: ${colors.white};
  text-transform: uppercase; 
  ${respondTo.md} {
    margin-left: 24px;
    margin-bottom: 28px;
    font-size: 28px;
    text-align: left;
  }
`

const Photo = styled.div`
  margin-bottom: 64px;
  border-radius: 40px;
  overflow: hidden;
  ${respondTo.md} {
    margin: 0 -34px;
    margin-bottom: 24px;
    border-radius: 0;
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

const Content = styled.div`
  margin: 0 auto;
  width: 80%;
  font-size: 18px;
  line-height: 36px;
  color: ${colors.white};
  text-align: ceter;
  ${respondTo.md} {
    width: 100%;
    font-size: 12px;
    line-height: 18px;
  }
`

export default CrossoverSection;