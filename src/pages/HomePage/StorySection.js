import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/CarouselNew';
import CardCarousel from '../../components/CardCarousel';
import ArtistGalleryCarousel from '../../components/ArtistGalleryCarousel';
import ModalBox from '../../components/ModalBox';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const StorySection = () => {
  const wording = _w('homepage.story');
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
        <TeamSection>
          { wording.team.map((item, i) =>
            <TeamItem key={i}>
              <div className="photo">
                <a href={item.link} target="_blank">
                  <img src={item.photo} />
                </a>
              </div>
              <div className="title">
                <a href={item.link} target="_blank">{ item.title }</a>
              </div>
              <div className="subtitle">{ item.subtitle }</div>
              <div className="content">{ item.content }</div>
            </TeamItem>
          ) }
        </TeamSection>
        <Section2>
          <CardContainer>
            <CardCarousel data={wording.card_data} />
          </CardContainer>
        </Section2>
        <Section3>
          <ArtistGalleryCarousel data={wording.artist_data} childrenQty={wording.artist_data_array} />
        </Section3>
      </Root>
    </>
  )
}

const Root = styled.div`
  padding-bottom: 240px;
  box-sizing: border-box;
  ${respondTo.md} {
    padding-bottom: 64px;
  }
`

const TeamSection = styled.div`
  border-bottom: 1px solid #4D4D4D;
  padding-top: 100px;
  padding-bottom: 150px;
  text-align: center;
  ${respondTo.lg} {
    padding-top: 50px;
    padding-bottom: 70px;
    width: 100%;
    white-space: nowrap;
    overflow: auto;
  }
`

const TeamItem = styled.div`
  display: inline-block;
  margin-bottom: 60px;
  width: 25%;
  padding: 0 30px;
  box-sizing: border-box;
  ${respondTo.lg} {
    width: 260px;
  }
  > .photo {
    a {
      display: inline-block;
      width: 100%;
      max-width: 200px;
      height: auto;
      border-radius: 50%;
      overflow: hidden;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  > .title {
    margin-bottom: 6px;
    font-size: 24px;
    font-weight: 500;
    color: ${colors.white};
    text-transform: uppercase;
  }
  > .subtitle {
    margin-bottom: 28px;
    opacity: 0.3;
    font-size: 18px;
    font-weight: 500;
    color: ${colors.white};
  }
  > .content {
    opacity: 0.3;
    font-size: 18px;
    font-weight: 400;
    white-space: break-spaces;
    color: ${colors.white};
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
      white-space: break-spaces;
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


export default StorySection;