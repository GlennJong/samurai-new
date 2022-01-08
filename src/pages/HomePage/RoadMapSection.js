import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondFrom, respondTo } from '../../utils/responsive';
import { _w } from '../../utils/wordingSystem';

const Icon = () => (
  <svg width="25.039" height="23.106" viewBox="0 0 25.039 23.106">
    <g id="fobiUb.tif" transform="translate(-608.822 761.747)">
      <g id="Group_103" data-name="Group 103" transform="translate(608.822 -761.747)">
        <path id="Path_57" data-name="Path 57" d="M633.86-760.012a1.731,1.731,0,0,1-.4,1.109q-.775,1.061-1.548,2.124l-6.824,9.371-5.819,7.993a1.794,1.794,0,0,1-1.434.773,1.575,1.575,0,0,1-1.217-.51q-2.063-2.122-4.12-4.249-.618-.638-1.236-1.275-.978-1-1.956-2.007a1.708,1.708,0,0,1-.068-2.311,1.713,1.713,0,0,1,2.361-.268c1.572,1.143,3.156,2.269,4.736,3.4.269.193.536.387.809.575a.676.676,0,0,0,.946-.139q2.388-2.949,4.774-5.9l6.748-8.33c.376-.464.75-.93,1.127-1.394a1.674,1.674,0,0,1,1.825-.637,1.671,1.671,0,0,1,1.271,1.377A2.346,2.346,0,0,1,633.86-760.012Z" transform="translate(-608.822 761.747)" fill="#6fa2a9"/>
      </g>
    </g>
  </svg>
)

const RoadMapSection = () => {
  const wording = _w('homepage.roadmap')
  return (
    <Root>
      <Title>Roadmap</Title>
      <List>
        { wording.list.map((item, i) =>
          <li key={i}><RoadMapItem {...item} /></li>
        ) }
      </List>
    </Root>
  )
}

const RoadMapItem = ({ title, description, photo, reach, coming_soon, percent }) => {
  const [ open, setOpen ] = useState(false);
  const [ isAnimating, setIsAnimating ] = useState(false);
  const [ textHeight, setTextHeight ] = useState(null);
  const textRef = useRef(null);

  function handleSetAnimating() {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  }

  useEffect(() => {
    handleGetTextHeight();
  }, [])

  function handleGetTextHeight() {
    const style = window.getComputedStyle(textRef.current);
    const lineHeight = Number(style['line-height'].replace('px', ''));
    const offsetHeight = textRef.current.offsetHeight;
    
    setTextHeight({min: lineHeight * 2, max: offsetHeight});
  }

  function handleClickOpenButton() {
    setOpen(!open);
    handleSetAnimating();
  }

  
  return (
    <RoadMapItemRoot>
      <Photo disable={coming_soon} open={open}>
        <div className="hint">COMMING SOON...</div>
        <img src={photo} alt="" />
      </Photo>
      <Content>
        <Info open={open} textHeight={textHeight} isAnimating={isAnimating}>
          <div className="head">
            <div className="percent"><span>{ percent }</span>%</div>
            { reach && <div className="reach"><Icon />REACH</div>}
          </div>
          <div className="title">{ title }</div>
          <div className="description">
            <p ref={textRef}>{ description }</p>
          </div>
        </Info>
        <More>
          <button onClick={handleClickOpenButton}>
            { open ? 'CLOSE' : 'SEE MORE'}
          </button>
        </More>
      </Content>
    </RoadMapItemRoot>
  )
}

const Root = styled.div`
  margin: 0 auto;
  border-top: 1px solid #4D4D4D;;
  padding: 0 34px;
  padding-top: 270px;
  padding-bottom: 240px;
  width: 1438px;
  max-width: 100%;
  box-sizing: border-box;
  ${respondTo.md} {
    padding-top: 50px;
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

const List = styled.ul`
  > li {
    margin-bottom: 72px;
    ${respondTo.lg} {
      margin-bottom: 36px;
    }
  }
`

const RoadMapItemRoot = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  border: 1px solid #4D4D4D;
  border-radius: 20px;
  box-sizing: border-box;
  overflow: hidden;
  ${respondTo.lg}{
    display: block;
  }
`
const Content = styled.div`
  display: flex;
  position: relative;
  padding: 67px 0;
  padding-left: 90px;
  width: 70%;
  box-sizing: border-box;
  ${respondTo.lg} {
    padding: 24px 20px;
    width: 100%;
  }
`
const Info = styled.div`
  .head {
    display: flex;
    align-items: flex-end;
    margin-bottom: 40px;
    ${respondTo.lg} {
      margin-bottom: 14px;
      align-items: center;
    }
    .percent {
      margin-right: 50px;
      font-size: 48px;
      font-weight: 900;
      color: ${colors.white};
      ${respondTo.lg} {
        margin-right: 18px;
        font-size: 28px;
      }
      span {
        font-size: 80px;
        ${respondTo.lg} {
          font-size: 28px;
        }
      }
    }
    .reach {
      margin-bottom: 14px;
      ${respondTo.lg} {
        margin-bottom: 0;
      }
      svg {
        margin-right: 8px;
        ${respondTo.lg} {
          height: 16px;
          width: auto;
        }
      }
      color: #6FA2A9;
      font-size: 24px;
      ${respondTo.lg} {
        font-size: 16px;
      }
    }
  }
  .title {
    margin-bottom: 20px;
    color: ${colors.white};
    font-size: 48px;
    font-weight: 500;
    ${respondTo.lg} {
      font-size: 16px;
      margin-bottom: 16px;
    }
  }
  .description {
    position: relative;
    p {
      color: ${colors.white};
      font-size: 18px;
      line-height: 36px;
      margin: 0;
      ${respondTo.lg} {
        font-size: 12px;
        line-height: 18px;
      }
      ${respondFrom.lg} {
        ${({ textHeight, open, isAnimating }) => textHeight && css`
          display: -webkit-box;
          -webkit-box-orient: vertical;
          max-height: ${textHeight.min}px;
          overflow: hidden;
          transition: max-height 1s ease;
          ${(open && !isAnimating) && css` -webkit-line-clamp: unset; ` }
          ${(!open && !isAnimating) && css` -webkit-line-clamp: 2; ` }
          ${open && css` max-height: ${textHeight.max}px; `}
        `}
      }
    }
  }
`
const Photo = styled.div`
  position: relative;
  width: 30%;
  box-sizing: border-box;
  ${respondTo.lg} {
    width: 100%;
    padding-bottom: 100%;
    height: 0;
    overflow: hidden;
    transition: padding-bottom 1s ease;
    ${({ open }) => open && css`padding-bottom: 180%;`};
  }
  .hint {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    z-index: 1;
    text-align: center;
    font-size: 24px;
    color: ${colors.white};
    opacity: 0;
    ${({ disable }) => disable && css`opacity: 0.5`};
  }
  img {
    position: absolute;
    display: block;
    object-fit: cover;
    object-position: 50% top;
    width: 100%;
    height: 100%;
    ${({ disable }) => disable && css`opacity: 0.5`};

  }
`

const More = styled.div`
  padding-right: 36px;
  text-align: right;
  ${respondTo.lg} {
    position: absolute;
    top: 20px;
    right: 8px;
    padding: 0;
  }
  button {
    border: 0;
    color: #4D4D4D;
    text-decoration: underline;
    background: transparent;
    white-space: nowrap;
    font-size: 18px;
    ${respondTo.lg} {
      font-size: 12px;
    }
  }
`


export default RoadMapSection