import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/CarouselNew';
import CardCarousel from '../../components/CardCarousel';
import ArtistCarousel from '../../components/ArtistCarousel';
import ModalBox from '../../components/ModalBox';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const ArtistSection = () => {
  const wording = _w('homepage.artist');
  const [ modalOpen, setModalOpen ] = useState(false)
  const [ selectedPicture, setSelectedPicture ] = useState(null)
  
  function handleClickPicture(e) {
    const { picture } = e.currentTarget.dataset;
    setSelectedPicture(picture)
    setModalOpen(true)
  }

  function handleCloseModal() {
    setModalOpen(false)
    setTimeout(() => {
      setSelectedPicture(null)
    }, 300);
  }
  
  return (
    <>
      <ModalBox open={modalOpen} onClose={handleCloseModal}>
        <Image src={selectedPicture} alt="" />
      </ModalBox>
      <Root>
        <Title>ARTIST</Title>
        <Section1>
          <Info>
            <div className="head">
              <img src={wording.head} alt="" />
            </div>
            <div className="info">
              <div className="subtitle">{ wording.subtitle }</div>
              <div className="title">{ wording.title }</div>
              <div className="content">{ wording.content }</div>
            </div>
          </Info>
          <Gallery>
            <Carousel navStyle="bottom: calc(100% + 50px); right: 0; width: auto">
              { wording.gallery.map((item, i) =>
                <List qty={item.length} key={i}>
                  { item.map((child, j) =>
                    <li key={j}>
                      <Item>
                        <div className="photo"
                          data-picture={child.photo}
                          onClick={handleClickPicture}>
                          <img src={child.photo} alt="" />
                        </div>
                        <div className="title">{ child.title }</div>
                        <div className="note">{ child.note }</div>
                      </Item>
                    </li>
                  ) }
                </List>
              ) }
            </Carousel>
          </Gallery>
          <GalleryMobile>
            <Carousel navMobileStyle="top: auto; bottom: 30px; right: 0; width: auto">
              { wording.gallery.flat().map((item, i) =>
                <div key={i}>
                  <Item>
                    <div className="photo"
                      data-picture={item.photo}
                      onClick={handleClickPicture}>
                      <img src={item.photo} alt="" />
                    </div>
                    <div className="title">{ item.title }</div>
                    <div className="note">{ item.note }</div>
                  </Item>
                </div>
              ) }
            </Carousel>
          </GalleryMobile>
        </Section1>
        <Section2>
          <CardContainer>
            <CardCarousel data={wording.card_data} />
          </CardContainer>
        </Section2>
        <Section3>
          <div className="container">
            <ArtistCarousel data={wording.artist_data} childrenQty={wording.artist_data_array} />
          </div>
        </Section3>
      </Root>
    </>
  )
}

const Root = styled.div`
  border-top: 1px solid #4D4D4D;
  padding: 0 34px;
  padding-top: 180px;
  padding-bottom: 240px;
  box-sizing: border-box;
  ${respondTo.md} {
    padding-top: 64px;
    padding-bottom: 64px;
  }
`

const Title = styled.div`
  margin-left: 80px;
  margin-bottom: 100px;
  font-size: 80px;
  font-weight: 900;
  color: ${colors.white};
  text-transform: uppercase; 
  ${respondTo.md} {
    margin-left: 24px;
    margin-bottom: 28px;
    font-size: 28px;
  }
`

const Section1 = styled.div`
  display: flex;
  margin: 0 auto;
  border-bottom: 1px solid #4D4D4D;
  padding-bottom: 180px;
  width: 1438px;
  max-width: 100%;
  ${respondTo.md} {
    padding-bottom: 60px;
    display: block;
  }
`

const Section2 = styled.div`
  border-bottom: 1px solid #4D4D4D;
  margin: 0 auto;
  padding: 180px 0;
  width: 1438px;
  max-width: 100%;
  ${respondTo.md} {
    padding-top: 50px;
    padding-bottom: 90px;
  }
`

const Section3 = styled.div`
  padding-top: 180px;
  overflow: hidden;
  ${respondTo.md} {
    padding-top: 54px;
  }
  .container {
    margin: 0 -10%;
    ${respondTo.md} {
      margin: 0;
    }
  }
`

const Info = styled.div`
  border-right: 1px solid #4D4D4D;
  padding-right: 80px;
  width: 33.33%;
  box-sizing: border-box;
  ${respondTo.md} {
    border: 0;
    margin-bottom: 64px;
    padding: 0;
    width: 100%;
  }
  .head {
    border-radius: 20px;
    margin: 0 auto;
    width: 400px;
    max-width: 100%;
    height: auto;
    overflow: hidden;
    ${respondTo.md} {
      width: 100%;
      height: auto;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .info {
    margin-top: 40px;
    color: ${colors.white};
    ${respondTo.md} {
      padding: 0 34px;
      box-sizing: border-box;
    }
    .subtitle {
      margin-bottom: 18px;
      font-size: 24px;
      ${respondTo.md} {
        margin-bottom: 12px;
        font-size: 16px;
      }
    }
    .title {
      margin-bottom: 20px;
      font-size: 48px;
      ${respondTo.md} {
        margin-bottom: 9px;
        font-size: 28px;
      }
    }
    .content {
      font-size: 18px;
      line-height: 30px;
      ${respondTo.md} {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
`
const Gallery = styled.div`
  padding-left: 80px;
  width: 65%;
  box-sizing: border-box;
  ${respondTo.md} {
    display: none;
    padding: 0;
    width: 100%;
  }
`

const GalleryMobile = styled.div`
  display: none;
  ${respondTo.md} {
    display: block;
  }
`


const List = styled.ul`
  display: flex;
  margin: 0 -30px;
  > li {
    width: ${({ qty }) => 100/qty}%;
    padding: 0 30px;
    box-sizing: border-box;
  }

`
const Item = styled.div`
  .photo {
    cursor: pointer;
    border-radius: 20px;
    margin-bottom: 40px;
    width: 100%;
    height: 520px;
    overflow: hidden;
    ${respondTo.md} {
      margin-bottom: 28px;
      height: 400px;
    }
    > img {
      display: block;
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin-bottom: 15px;
    font-size: 24px;
    color: ${colors.white};
    text-transform: uppercase;
    ${respondTo.md} {
      margin-left: 24px;
      margin-bottom: 4px;
      font-size: 16px;
    }
  }
  .note {
    opacity: 0.3;
    font-size: 18px;
    color: ${colors.white};
    ${respondTo.md} {
      margin-left: 24px;
      opacity: 1;
      font-size: 12px;
    }
  }
  
`

const CardContainer = styled.div`
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
  ${respondTo.md} {
    margin: 0 -34px;
    width: calc(100% + 68px);
    max-width: calc(100% + 68px);
  }
`

const Image = styled.img`
  display: block;
  object-fit: contain;
  max-width: 80vw;
  max-height: 80vh;
`


export default ArtistSection;