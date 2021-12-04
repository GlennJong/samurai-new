import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';


const ManifestoSection = () => {
  const wording = _w('homepage.manifesto')
  return (
    <Root>
      <Title>Manifesto</Title>
      <Wrapper>
        <List>
          { wording.list.map((item, i) => 
            <li key={i}>
              <Item >
                <div className="title">{ item.title }</div>
                <div className="content">{ item.content }</div>
              </Item>
            </li>
          ) }
        </List>
      </Wrapper>
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
    padding-top: 64px;
    padding-bottom: 54px;
  }
`

const Title = styled.div`
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


const Wrapper = styled.div`
  overflow: hidden;
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -50px;
  ${respondTo.md} {
    display: block;
    margin: 0;
    padding: 0 20px;
  }
  > li {
    padding: 0 50px;
    margin-bottom: 80px;
    width: 50%;
    box-sizing: border-box;
    ${respondTo.md} {
      margin-bottom: 28px;
      padding: 0;
      width: 100%;
    }
  }
`

const Item = styled.div`
  .title {
    color: ${colors.white};
    line-height: 36px;
    font-size: 24px;
    font-weight: 600;
    ${respondTo.md} {
      line-height: 28px;
      font-size: 16px;
    }
  }
  .content {
    opacity: 0.3;
    color: ${colors.white};
    line-height: 36px;
    font-size: 18px;
    overflow: hidden;
    transition: max-height .3s ease;
    ${respondTo.md} {
      line-height: 18px;
      font-size: 12px;
    }
  }
`


export default ManifestoSection;