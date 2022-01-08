import React, { useMemo } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/CarouselNew';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const MerchSection = () => {
  const wording = _w('homepage.merch');
  
  const merchData = useMemo(() => {
    const arr = new Array(Math.ceil(wording.list.length/3));

    wording.list.forEach((item, i) => {
      if (!arr[Math.floor(i/4)]) {
        arr[Math.floor(i/4)] = [item]
      }
      else {
        arr[Math.floor(i/4)].push(item)
      }
    })
    
    return arr
  }, [wording])

  return (
    <Root>
      <Title>MERCH</Title>
      <Container>
        <CarouselContainer>
          <Carousel navStyle="bottom: calc(100% + 50px); right: 0; width: auto"
           controller={false}
           navMobileStyle="bottom: calc(100% + 40px); right: 0; width: auto">
            { merchData?.map((item, i) =>
              <List qty={4} key={i}>
                { item.map((child, j) =>
                  <li key={j}>
                    <Item as="a" href={ child.link } target="_blank">
                      <div className="photo"><img src={child.photo} alt="" /></div>
                      <div className="title">{ child.title }</div>
                    </Item>
                  </li>
                ) }
              </List>
            ) }
          </Carousel>
        </CarouselContainer>
      </Container>
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
  overflow: hidden;
  box-sizing: border-box;
  ${respondTo.md} {
    padding-top: 64px;
    padding-bottom: 50px;
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

const Container = styled.div`
  position: relative;
  max-width: 100%;
`

const CarouselContainer = styled.div`
`

const List = styled.ul`
  display: flex;
  margin: 0 -30px;
  ${respondTo.md} {
    display: block;
    margin: 0;
  }
  > li {
    width: ${({ qty }) => 100/qty}%;
    padding: 0 30px;
    box-sizing: border-box;
    ${respondTo.md} {
      margin-bottom: 30px;
      padding: 0;
      width: 100%;
    }
  }

`

const Item = styled.div`
  display: block;
  border: 1px solid ${colors.white};
  border-radius: 40px;
  padding: 24px 30px;
  box-sizing: border-box;
  .photo {
    margin-bottom: 40px;
    width: 100%;
    height: 300px;
    > img {
      display: block;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
  .title {
    margin-bottom: 24px;
    font-size: 36px;
    font-weight: 900;
    color: ${colors.white};
    text-align: center;
    text-transform: uppercase;
    ${respondTo.md} {
      margin-bottom: 12px;
      font-size: 28px;
    }
  }
  .link {
    opacity: 0.3;
    font-size: 18px;
    color: ${colors.white};
    text-transform: uppercase;
    text-align: center;
    ${respondTo.md} {
      font-size: 16px;
    }
  }
  
`
export default MerchSection;