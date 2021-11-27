import React from 'react';
import styled from 'styled-components';
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

const HomePage = () => {
  return (
    <Root>
      {/* IntroAnimation */}
      <BannerSection />
      <MintSection />
      <RoadMapSection />
      <DiscordSection />
      <ArtistSection />
      <MerchSection />
      <CrossoverSection />
      <FAQSection />
      <ManifestoSection />
      <MintButton />
    </Root>
  )
}

const Root = styled.div`
  padding-top: 72px;
  ${respondTo.lg} {
    padding-top: 48px;
  }
`

export default HomePage