import React from 'react';
import styled from '@emotion/styled';
import WaveIcon from '../components/assets/wave.js';
import JourneyCard from '../components/JourneyCard.js';
import PlusIcon from '../components/icons/plus.js';

const JourneysBackground = styled.header`
  background-color: ${props => props.theme.colors.background};
  height: 35%;
  width: 100%;
  position: fixed;
  top: 0;
  /* z-index: 9999; */
`;

const IconStyle = {
  position: 'absolute',
  bottom: '0'
};

const Heading = styled.h1`
  margin: 70px 0px 0px 40px;
  color: ${props => props.theme.colors.fontprimary};
`;

const SubHeading = styled.h5`
  margin: 10px 0px 10px 40px;
  color: ${props => props.theme.colors.fontprimary};
`;

const CardContainer = styled.div`
  height: 65%;
  width: 100%;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  overflow: auto;
`;

const StylePlusIcon = {
  fill: '#DCB480'
};

const HeaderContainer = styled.div`
  display: flex;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  margin: 30px 15px 0px 90px;

  outline: none;
  border: none;
`;

function handleClick() {
  console.log('test');
}
export default function Journeys() {
  return (
    <>
      <JourneysBackground>
        <HeaderContainer>
          <HeadingContainer>
            <Heading>Deine Reisen</Heading>
            <SubHeading>im Überblick</SubHeading>
          </HeadingContainer>
          <AddButton onClick={handleClick}>
            <PlusIcon style={StylePlusIcon} />
          </AddButton>
        </HeaderContainer>
        <WaveIcon style={IconStyle} />
      </JourneysBackground>
      <CardContainer>
        <JourneyCard></JourneyCard>
        <JourneyCard></JourneyCard>
        <JourneyCard></JourneyCard>
        <JourneyCard></JourneyCard>
      </CardContainer>
    </>
  );
}
