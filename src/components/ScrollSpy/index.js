import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../../constants/colors';
import { respondTo } from '../../utils/responsive';
import { scrollTo } from '../../utils/scrollTo';
import { _w } from '../../utils/wordingSystem';
import Heart from './Heart';

const ScrollSpy = ({ spy, spyData, ...props }) => {
  const wording = _w('homepage');

  const scrollSpyData = useMemo(() => {
    return spyData.map(data => {
      const item = { name: data, title: wording[data].subtitle };
      item.active = data === spy;
      return item;
    })
  }, [spyData, spy])

  function handleScrollTo(e) {
    const follow = e.currentTarget.dataset.follow;
    const offsetTop = document.querySelector(`#${follow}`).offsetTop;

    scrollTo(1, offsetTop);
  }
  
  return (
    <Root {...props}>
      { scrollSpyData?.map((item, i) =>
        <li key={i}>
          <SpyItem
            active={item.active}
            data-follow={item.name}
            onClick={handleScrollTo}>
            <Heart />
            <span>{item.title}</span>
          </SpyItem>
        </li>
      ) }
    </Root>
  )
}

const Root = styled.ul`
  position: fixed;
  top: 50%;
  left: 12px;
  width: 100px;
  transform: translateY(-50%);
  > li + li {
    margin-top: 12px;
  }
  ${respondTo.lg} { display: none; }
`

const SpyItem = styled.button`
  padding: 0;
  border: 0;
  background: transparent;
  color: ${colors.green};
  white-space: nowrap;
  &:hover {
    > span {
      width: 100%;
    }
  }

  ${({ active }) => active && css`
    color: ${colors.pink};
  `}
  > svg {
    display: inline-block;
    vertical-align: middle;
  }
  > span {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    margin-left: 12px;
    white-space: nowrap;
    width: 0px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    overflow: hidden;
  }
`

export default ScrollSpy;