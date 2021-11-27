import React from 'react';
import styled from 'styled-components';
import Carousel from '../../components/CarouselNew'
import { RadiusButton } from '../../components/RadiusButton'
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const DiscordSection = () => {
  const wording = _w('homepage.discord')
  
  return (
    <Root>
      <Container>
        <Slider>
          <Carousel>
            { wording.list.map((item, i) =>
              <Item key={i}><img src={item} alt="" /></Item>
            ) }
          </Carousel>
        </Slider>
        <Info>
          <div className="content">
            <div className="title">{ wording.title }</div>
            <div className="description">{ wording.description }</div>
          </div>
          <div className="button">
            <RadiusButton>JOIN OUR DISCORD</RadiusButton>
          </div>
        </Info>
      </Container>
    </Root>
  )
}

const Root = styled.div`
  margin: 0 auto;
  border-top: 1px solid #4D4D4D;
  padding-top: 180px;
  padding-bottom: 240px;
  width: 1438px;
  max-width: 100%;
  ${respondTo.md} {
    padding-top: 54px;
    padding-bottom: 54px;
  }
`

const Container = styled.div`
  display: flex;
  align-items: stretch;
  margin: 0 auto;
  width: 1024px;
  max-width: 100%;
  ${respondTo.md} {
    display: block;
  }
`

const Slider = styled.div`
  padding-right: 50px;
  width: 50%;
  box-sizing: border-box;
  ${respondTo.md} {
    margin-bottom: 64px;
    padding: 0;
    width: 100%;
  }
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 50px;
  width: 50%;
  box-sizing: border-box;
  color: ${colors.white};
  box-sizing: border-box;
  ${respondTo.md} {
    padding: 0;
    width: 100%;
  }
  .content {
    ${respondTo.md} {
      margin-bottom: 80px;
      padding: 0 34px;
      box-sizing: border-box;
    }
    .title {
      margin-bottom: 24px;
      font-size: 80px;
      line-height: 1.1;
      font-weight: 900;
      text-transform: uppercase;
      text-align: center;
      ${respondTo.md} {
        font-size: 28px;
      }
    }
    .description {
      font-size: 18px;
      line-height: 36px;
      text-align: center;
      ${respondTo.md} {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
  .button {
    text-align: center;
  }
`

const Item = styled.div`
  border-radius: 36px;
  width: 100%;
  overflow: hidden;
  ${respondTo.md} {
    border-radius: 0;
  }
  > img {
    display: block;
    width: 100%;
    height: auto;
  }

`


export default DiscordSection;