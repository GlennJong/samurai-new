import React, { useState } from 'react';
import styled from 'styled-components';
import CenterCarousel from '../../components/CenterCarousel'
import { Plus, Minus } from '../../components/Icons';
import { RadiusButton } from '../../components/RadiusButton';
import SpySection from '../../components/SpySection';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem'

const MintSection = () => {
  const [ qty, setQty ] = useState(1);
  const wording = _w('homepage.mint')
  
  function handleAddQty() {
    if (qty<=49){
      let currentQty = Math.max(qty+1, 1);
      setQty(currentQty);
    }
  }

  function handleDecreaseQty() {
    let currentQty = Math.max(qty-1, 1);
    setQty(currentQty);
  }
  
  function handleSetQty(value) {
    if (value<=50){
      setQty(value);
    } else {
      setQty(50);
    }
  }
  
  return (
    <Root>
      <CarouselWrapper id="gallery">
        <CenterCarousel childrenQty={wording.array}>
          { wording.samurai.map((item, i) =>
            <CarouselItem key={i}>
              <ImageWrapper>
                <img src={item} />
              </ImageWrapper>
            </CarouselItem>
          ) }
        </CenterCarousel>
      </CarouselWrapper>
      <Title>{ wording.title }</Title>
      <Subtitle>{ wording.subtitle }</Subtitle>
      <Description>{ wording.content }</Description>
      <SpySection id="mint">
        <Mint>
          <div className="price">price：{wording.price} Ξ</div>
          <QtySelector qty={qty} 
            onPlusClick={handleAddQty}
            onMinusClick={handleDecreaseQty}
            onQtyInput={handleSetQty}
          />
          <div className="note">{ wording.note }</div>
          <div className="buttonbar">
            <RadiusButton>MINT</RadiusButton>
            <RadiusButton className="connect">CONNECT WALLET</RadiusButton>
          </div>
          <div className="hint">{ wording.hint }</div>
        </Mint>
      </SpySection>
    </Root>
  )
}


const QtySelector = ({ qty, onPlusClick, onMinusClick, onQtyInput }) => {

function handleChangeQty(e) {
  const value = Number(e.currentTarget.value);
  (value !== NaN && value >= 0) && onQtyInput(value);
}

return (
  <Selector>
    <QtyButton disabled={qty <= 1} onClick={onMinusClick}><Minus /></QtyButton>
    <input className="qty" type="text" value={qty} onChange={handleChangeQty} />
    <QtyButton disabled={false} onClick={onPlusClick}><Plus /></QtyButton>
  </Selector>
)
}

const Root = styled.div`
  padding-top: 240px;
  padding-bottom: 150px;
  overflow: hidden;
  ${respondTo.md} {
    padding-top: 40px;
    padding-bottom: 52px;
  }
`

const CarouselWrapper = styled.div`
  margin: 0 -120px;
  margin-bottom: 120px;
  ${respondTo.md} {
    margin: 0;
    margin-bottom: 60px;
  }
`
const CarouselItem = styled.div`
  padding: 0 30px;
  box-sizing: border-box;
`

const ImageWrapper = styled.div`
  position: relative;
  border-radius: 40px;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  img {
    object-fit: cover;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
  }
`

const Title = styled.div`
  margin-bottom: 32px;
  background-image: linear-gradient(180deg, #335C7E 30%, #E6E6B4 50%, #DA9F8A 70%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 80px;
  font-weight: 900;
  text-align: center;
  ${respondTo.md} {
    margin-bottom: 24px;
    font-size: 48px;
  }
`

const Subtitle = styled.div`
  margin-bottom: 52px;
  color: ${colors.white};
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  ${respondTo.md} {
    margin-bottom: 24px;
    font-size: 24px;
  }
`

const Description = styled.div`
  margin: 0 auto;
  margin-bottom: 114px;
  padding: 0 34px;
  width: 1024px;
  max-width: 100%;
  color: ${colors.white};
  font-size: 18px;
  line-height: 36px;
  text-align: center;
  box-sizing: border-box;
  ${respondTo.md} {
    margin-bottom: 42px;
    line-height: 18px;
    font-size: 12px;
  }
`

const Mint = styled.div`
  text-align: center;
  .price {
    margin-bottom: 20px;
    font-size: 24px;
    color: ${colors.white};
    text-transform: uppercase;
    ${respondTo.md} {
      margin-bottom: 16px;
      font-size: 16px;
    }
  }
  .note {
    margin-top: 32px;
    margin-bottom: 68px;
    font-size: 18px;
    color: ${colors.white};
    opacity: 0.4;
    text-transform: uppercase;
    ${respondTo.md} {
      margin-top: 24px;
      margin-bottom: 48px;
      font-size: 16px;
    }
  }
  .hint {
    margin-top: 14px;
    font-size: 18px;
    color: ${colors.white};
    ${respondTo.md} {
      margin: 0 auto;
      margin-top: 24px;
      font-size: 12px;
      width: 220px;
    }
  }
  .buttonbar {
    text-align: center;
    padding: 0 12px;
    ${respondTo.md} {
      display: flex;
      justify-content: space-between;
      > button, > a {
        width: calc(50% - 4px);
      }
    }
    > .connect {
      display: none;
      ${respondTo.md} {
        display: inline-block;
      }
    }
  }
`

const Selector = styled.div`
  display: inline-flex;
  align-items: center;
  .qty {
    border: 1px solid ${colors.white};
    border-radius: 5px;
    height: 36px;
    width: 134px;
    line-height: 30px;
    font-size: 18px;
    font-weight: 900;
    color: ${colors.white};
    background: transparent;
    text-align: center;
  }
`

const QtyButton = styled.button`
  border: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  margin: 0 18px;
  font-size: 12px;
  line-height: 1;
  background: transparent;
  color: ${colors.white};
`

export default MintSection