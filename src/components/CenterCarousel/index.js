import React, { useMemo, useRef, useState } from 'react';
import Slick from 'react-slick';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const Carousel = ({ className='', children, childrenQty }) => {
  const [ current, setCurrent ] = useState(Math.ceil(children.length / 2)-1);
  const carouselRef = useRef(null);
  const slickSettings = {
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    afterChange: (e) => setCurrent(e),
    slidesToShow: 3,
    initialSlide: Math.ceil(children.length / 2)-1,
    responsive: [ 
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  function handleClickArrowButton(e) {
    if (carouselRef.current) {
      const { direction } = e.currentTarget.dataset;
      if (direction === 'prev') carouselRef.current.slickPrev();
      if (direction === 'next') carouselRef.current.slickNext();
    }
  }

  function isDotActive(index) {
    const dotIndex = childrenQty.findIndex((item) => item.arr.includes(current));
    return dotIndex === index;
  }

  function handleClickDot(e) {
    const index = Number(e.currentTarget.dataset.index);
    const currentSlideGroup = childrenQty[index];
    
    carouselRef.current.slickGoTo(currentSlideGroup.target);
  }

  return (
    <Root>
      <NavContainer>
        <button data-direction="prev" onClick={handleClickArrowButton}/>
        <button data-direction="next" onClick={handleClickArrowButton}/>
      </NavContainer>
      <CarouselBody>
        <Slick className={className} ref={carouselRef} {...slickSettings}>
          { children.map((child, i) => <div key={i}>{ child }</div>) }
        </Slick>
      </CarouselBody>
      <DotContainer>
        { childrenQty.map((_, i) =>
          <Dot active={isDotActive(i)} key={i} data-index={i} onClick={handleClickDot} />
        ) }
      </DotContainer>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
  .slick-dots {
    position: relative;
    bottom: 0;
    z-index: 1;
    button:before {
      color: ${colors.white};
    }
  }
  .slick-list {
    overflow: visible;
    ${respondTo.md} {
      overflow: hidden;
    }
  }
  .slick-slide {
    opacity: 0.5;
    transition: all .3s ease;
    &.slick-current, &.slick-center {
      opacity: 1;
      transform: scale(1.1);
      ${respondTo.md} {
        transform: scale(1);
      }
    }
  }
`

const CarouselBody = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
`

const NavContainer = styled.div`
  > button {
    position: absolute;
    top: 0;
    width: 20%;
    height: 100%;
    border: 0;
    background: transparent;
    z-index: 2;
    &:first-child {
      left: 0;
    }
    &:last-child {
      right: 0;
    }
  }
`

const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
  ${respondTo.md} {
    margin-top: 20px;
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

export default Carousel;
