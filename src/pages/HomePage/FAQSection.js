import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const FAQSection = () => {
  const [ current, setCurrent ] = useState(null);
  const wording = _w('homepage.faq')
  

  function handleClickItem(e) {
    const index = Number(e.currentTarget.dataset.index);
    setCurrent(index)
  }
  
  return (
    <Root>
      <Title>FAQ</Title>
      <Wrapper>
        <List>
          { wording.list.map((item, i) => 
            <li key={i}>
              <Item open={current === i}>
                <div className="question" data-index={i} onClick={handleClickItem}>{ item.question }</div>
                <div className="answer">{ item.answer }</div>
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
    padding: 0 10px;
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
  .question {
    cursor: pointer;
    color: ${colors.white};
    line-height: 36px;
    font-size: 24px;
    font-weight: 600;
    ${respondTo.md} {
      line-height: 28px;
      font-size: 16px;
    }
  }
  .answer {
    padding-left: 24px;
    opacity: 0.3;
    color: ${colors.white};
    line-height: 36px;
    font-size: 18px;
    max-height: 0;
    overflow: hidden;
    transition: max-height .3s ease;
    ${({ open }) => open && css`
      max-height: 100vh;
    `}
    ${respondTo.md} {
      line-height: 18px;
      font-size: 12px;
    }
  }
`


export default FAQSection;