import React, { useMemo, useRef, useState } from 'react';
import Slick from 'react-slick';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import ModalBox from '../ModalBox';

const CarouselNew = ({ className='', data }) => {
  const [ currentIndex, setCurrentIndex ] = useState(0)
  const carouselRef = useRef(null);
  const [ selectedCard, setSelectedCard ] = useState(null)

  const slickSettings = {
    arrows: false,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    afterChange: (e) => { setCurrentIndex(e) },
  };

  function handleClickDot(e) {
    const index = Number(e.currentTarget.dataset.index);
    carouselRef.current.slickGoTo(index);
  }

  const modalOpen = useMemo(() => {
    return selectedCard !== null
  }, [selectedCard])

  function handleCloseModal() {
    setSelectedCard(null)
  }

  function handleClickCardPhoto(e) {
    const { card } = e.currentTarget.dataset;
    setSelectedCard(card)
  }
  
  return (
    <>
      <ModalBox open={modalOpen} onClose={handleCloseModal}>
        <img src={selectedCard} alt="" />
      </ModalBox>
      <Root>
        <CardContainer>
          <Slick className={className} ref={carouselRef} {...slickSettings}>
            { data.map((item, i) =>
              <div key={i}>
                <CardPhoto data-card={item.photo} onClick={handleClickCardPhoto}>
                  <div className="photo">
                    <img src={item.photo} alt="" />
                  </div>
                </CardPhoto>
              </div>
            ) }
          </Slick>
          <DotContainerMobile>
            { data.map((_, i) =>
              <Dot active={currentIndex === i} key={i} data-index={i} onClick={handleClickDot} />
            ) }
          </DotContainerMobile>
        </CardContainer>
        <TextContainer>
          { data.map((item, i) =>
            currentIndex === i &&
            <TextItem key={i}>
              <div className="title">{ item.title }</div>
              <div className="content">{ item.content }</div>
            </TextItem>
          ) }
          <DotContainer>
            { data.map((_, i) =>
              <Dot active={currentIndex === i} key={i} data-index={i} onClick={handleClickDot} />
            ) }
          </DotContainer>
        </TextContainer>
      </Root>
    </>
  )
}

const Root = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  ${respondTo.md} {
    display: block;
  }
`

const CardContainer = styled.div`
  padding-right: 50px;
  width: 50%;
  box-sizing: border-box;
  ${respondTo.md} {
    padding: 0;
    width: 100%;
  }
`

const TextContainer = styled.div`
  padding-left: 50px;
  width: 50%;
  box-sizing: border-box;
  ${respondTo.md} {
    margin-top: 48px;
    padding: 0 34px;
    width: 100%;
  }
`

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
  ${respondTo.md} {
    display: none;
  }
`

const DotContainerMobile = styled.div`
  display: none;
  justify-content: center;
  margin-top: 15px;
  ${respondTo.md} {
    display: flex;
  }
`

const Dot = styled.div`
  display: inline-block;
  border-radius: 8px;
  margin: 0 11px;
  width: 48px;
  height: 8px;
  background: ${colors.white};
  opacity: .15;
  transition: all .3s ease;
  cursor: pointer;
  ${({ active }) => active && css`
    opacity: 1;
  `}
  ${respondTo.md} {
    margin: 0 3px;
    width: 16px;
    height: 4px;
  }
`

const CardPhoto = styled.div`
  width: 100%;
  box-sizing: border-box;
  cursor: pointer;
  .photo {
    border-radius: 20px;
    overflow: hidden;
    ${respondTo.md} {
      border-radius: 0;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
`

const TextItem = styled.div`
  color: ${colors.white};
  text-align: center;
  .title {
    margin-bottom: 24px;
    font-size: 80px;
    ${respondTo.md} {
      font-size: 28px;
    }
  }
  .content {
    font-size: 18px;
    line-height: 36px;
    ${respondTo.md} {
      font-size: 12px;
      line-height: 18px;
    }
  }
`

export default CarouselNew;
