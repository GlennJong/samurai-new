import React from 'react';
import styled from 'styled-components';
import BannerSection from './BannerSection';
import MintSection from './MintSection';
import RoadMapSection from './RoadMapSection';
import DiscordSection from './DiscordSection';
import ArtistSection from './ArtistSection';
import StorySection from './StorySection';
import MerchSection from './MerchSection';
import CrossoverSection from './CrossoverSection';
import FAQSection from './FAQSection';
import ManifestoSection from './ManifestoSection';
import MintButton from '../../components/MintButton';
import { respondTo } from '../../utils/responsive';
import SpySection from '../../components/SpySection';

const HomePage = () => {
  
  return (
    <Root>
      <BannerSection />
      <MintSection />
      <SpySection id="roadmap">
        <RoadMapSection />
      </SpySection>
      <DiscordSection />
      <SpySection id="team">
        <ArtistSection />
      </SpySection>
      <SpySection id="story">
        <StorySection />
      </SpySection>
      <SpySection id="merch">
        <MerchSection />
      </SpySection>
      {/* <CrossoverSection /> */}
      <SpySection id="faq">
        <FAQSection />
      </SpySection>
      {/* <ManifestoSection /> */}
      {/* <MintButton /> */}
    </Root>
  )
}

const Root = styled.div`
  padding-top: 72px;
  ${respondTo.lg} {
    padding-top: 48px;
    max-width: 100vw;
    overflow: hidden;
  }
`

export default HomePage