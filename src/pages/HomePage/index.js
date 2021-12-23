import React, { useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import BannerSection from './BannerSection';
import MintSection from './MintSection';
import RoadMapSection from './RoadMapSection';
import DiscordSection from './DiscordSection';
import ArtistSection from './ArtistSection';
import MerchSection from './MerchSection';
import CrossoverSection from './CrossoverSection';
import FAQSection from './FAQSection';
import ManifestoSection from './ManifestoSection';
import MintButton from '../../components/MintButton';
import { respondTo } from '../../utils/responsive';
import scrollSpy from '../../store/scrollSpy'
import useIntersectionObserver from '../../utils/useIntersectionObserver';

const HomePage = () => {
  
  return (
    <Root>
      <BannerSection />
      <MintSection />
      <SectionItem id="test1">
        <Test>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Test>
      </SectionItem>
      <MintSection />
      <SectionItem id="test2">
        <Test>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Test>
      </SectionItem>
      {/* <RoadMapSection /> */}
      {/* <DiscordSection /> */}
      {/* <ArtistSection /> */}
      {/* <MerchSection /> */}
      {/* <CrossoverSection /> */}
      {/* <FAQSection /> */}
      {/* <ManifestoSection /> */}
      <MintButton />
    </Root>
  )
}


const SectionItem = ({ id, children }) => {
  const rootRef = useRef(null);
  const dispatch = useDispatch(scrollSpy);

  useIntersectionObserver(rootRef, handleIntersection, {
    root: null,
    rootMargin: '0px 0px -20% 0px',
    threshold: 0
  })

  function handleIntersection(e) {
    if (e[0].isIntersecting) {
      dispatch(scrollSpy.actions.setSpy(id));
    };
  }

  return (
    <SectionItemRoot ref={rootRef} id={id}>
      { children }
    </SectionItemRoot>
  )
}


const Root = styled.div`
  padding-top: 72px;
  ${respondTo.lg} {
    padding-top: 48px;
  }
`

const Test = styled.div`
  padding: 120px 0;
  background: #000;
  color: red;
`

const SectionItemRoot = styled.div`

`

export default HomePage