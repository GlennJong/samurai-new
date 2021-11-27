import React from 'react';
import styled from 'styled-components';
import Carousel from '../../components/CarouselNew';
import CardCarousel from '../../components/CardCarousel';
import ArtistCarousel from '../../components/ArtistCarousel';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const data = [
  [
    { title: "TITLE", note: "Digital Painting  / 2021", photo: "http://placehold.it/400x500" },
    { title: "TITLE", note: "Digital Painting  / 2021", photo: "http://placehold.it/400x500" },
  ],
  [
    { title: "TITLE", note: "Digital Painting  / 2021", photo: "http://placehold.it/400x500" },
  ],
  [
    { title: "TITLE", note: "Digital Painting  / 2021", photo: "http://placehold.it/400x500" },
  ],
  [
    { title: "TITLE", note: "Digital Painting  / 2021", photo: "http://placehold.it/400x500" },
    { title: "TITLE", note: "Digital Painting  / 2021", photo: "http://placehold.it/400x500" },
  ]
]

const cardData = [
  { photo: "http://placehold.it/500x800?text=1", title: "KNS VERSE1", content: "Katana N’ Samurai is a collection of 10,000 unique digital samurai. We initiated the blockchain time machine and sent all the Cryptopunks back to ancient Japan. It’s not the year 2021, it’s the year 1700. In this parallel universe, Samurai belong to different Shogunate, carry different levels of power, with their legends. Ukiyo-e is the way we picture our Katana N’ Samurai. Also, we want to record the history of the blockchain world." },
  { photo: "http://placehold.it/500x800?text=2", title: "KNS VERSE2", content: "Katana N’ Samurai is a collection of 10,000 unique digital samurai. We initiated the blockchain time machine and sent all the Cryptopunks back to ancient Japan. It’s not the year 2021, it’s the year 1700. In this parallel universe, Samurai belong to different Shogunate, carry different levels of power, with their legends. Ukiyo-e is the way we picture our Katana N’ Samurai. Also, we want to record the history of the blockchain world." },
  { photo: "http://placehold.it/500x800?text=3", title: "KNS VERSE3", content: "Katana N’ Samurai is a collection of 10,000 unique digital samurai. We initiated the blockchain time machine and sent all the Cryptopunks back to ancient Japan. It’s not the year 2021, it’s the year 1700. In this parallel universe, Samurai belong to different Shogunate, carry different levels of power, with their legends. Ukiyo-e is the way we picture our Katana N’ Samurai. Also, we want to record the history of the blockchain world." },
]

const artistData = [
  { title: "title1", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=1", },
  { title: "title2", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=2", },
  { title: "title3", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=3", },
  { title: "title4", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=4", },
  { title: "title5", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=5", },
  { title: "title6", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=6", },
  { title: "title7", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=7", },
  { title: "title8", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=8", },
  { title: "title9", subtitle: "subtitle", content: " Also, we want to record the history of the blockchain world. To make here a sustainable and interactive community, Samurai community will eventually run by a DAO. People who join Samuraiverse will be involved in determining the direction of this project, including designing Katana with the team. Welcome to Samuraiverse! Join our Discord and follow our Twitter to be part of our community!", photo: "http://placehold.it/500x500?text=9", },
]

const ArtistSection = () => {
  const wording = _w('homepage.artist');
  
  return (
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
                      <div className="photo"><img src={child.photo} alt="" /></div>
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
                  <div className="photo"><img src={item.photo} alt="" /></div>
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


export default ArtistSection;