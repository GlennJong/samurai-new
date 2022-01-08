import React, { useRef, useState } from 'react';
import Slick from 'react-slick';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';

const Carousel = ({ className='', data, childrenQty }) => {
  const [ currentIndex, setCurrentIndex ] = useState(Math.ceil(data.length / 2)-1);
  const carouselRef = useRef(null);
  const slickSettings = {
    infinite: true,
    arrows: false,
    dots: false,
    autoplay: false,
    centerMode: false,
    afterChange: (e) => setCurrentIndex(e),
    slidesToShow: 1,
    initialSlide: Math.ceil(data.length / 2)-1,
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
    const dotIndex = childrenQty.findIndex(item => item.includes(currentIndex));
    return dotIndex === index;
  }

  function handleClickDot(e) {
    const index = Number(e.currentTarget.dataset.index);
    const currentSlide = childrenQty[index][0];
    carouselRef.current.slickGoTo(currentSlide);
  }


  return (
    <Root>
      <NavContainer>
        <button data-direction="prev" onClick={handleClickArrowButton}/>
        <button data-direction="next" onClick={handleClickArrowButton}/>
      </NavContainer>
      <CarouselBody>
        <Slick className={className} ref={carouselRef} {...slickSettings}>
          { data.map((child, i) => 
            <div key={i}>
              <Item>
                <div className="gallery">
                  { child.photo.map((photo, j) => 
                    <div className="photo">
                      <div><img key={j} src={ photo } alt="" /></div>
                    </div>
                  ) }
                </div>
              </Item>
            </div>
          ) }
        </Slick>
        <DotContainerMobile>
          { childrenQty.map((_, i) =>
            <Dot active={isDotActive(i)} key={i} data-index={i} onClick={handleClickDot} />
          ) }
        </DotContainerMobile>
      </CarouselBody>
      <Info>
        <div className="subtitle">{ data[currentIndex].subtitle }</div>
        <div className="title">{ data[currentIndex].title }</div>
        <div className="content">{ data[currentIndex].content }</div>
      </Info>
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
  padding: 24px 0;
  overflow: hidden;
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
    display: none;
  }
`

const DotContainerMobile = styled.div`
  display: none;
  justify-content: center;
  margin-top: 20px;
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

const Item = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  height: auto;
  ${respondTo.md} {
    padding: 0;
  }
  .gallery {
    display: flex;
    flex-wrap: wrap;
  }
  .photo {
    width: 25%;
    padding: 0 30px;
    box-sizing: border-box;
    ${respondTo.md} {
      padding: 0 12px;
      margin-bottom: 24px;
      width: 50%;
    }
    > div {
      border-radius: 20px;
      overflow: hidden;
      img {
        object-fit: cover;
        display: block;
        width: 100%;
        height: 100%;
      }
    }
  }
`

const Info = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 80px;
  ${respondTo.md} {
    margin-top: 26px;
    margin-bottom: 0;
  }
  .subtitle {
    margin-bottom: 8px;
    color: #F8B1CE;
    text-align: center;
    font-size: 24px;
    ${respondTo.md} {
      font-size: 12px
    }
  }
  .title {
    margin-bottom: 32px;
    background-image: linear-gradient(180deg, #335C7E 40%, #E6E6B4 60%, #DA9F8A 80%);
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 80px;
    font-weight: 900;
    text-align: center;
    ${respondTo.md} {
      margin-bottom: 20px;
      font-size: 30px;
    }
  }
  .content {
    margin: auto;
    width: 680px;
    max-width: 100%;
    color: ${colors.white};
    text-align: center;
    font-size: 18px;
    line-height: 36px;
    ${respondTo.md} {
      font-size: 12px;
      line-height: 18px;
    }
  }
`

export default Carousel;
