import React from 'react';
import styled from '@emotion/styled';
import SeeMoreIcon from './icons/seemore.js';
import light from '../themes/light.js';
import PhotoIcon from './icons/addphoto.js';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const CardElement = styled.div`
  height: 100px;
  border-radius: 10px;
  box-shadow: 0pt 3pt 20pt #00000029;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  background-color: ${light.colors.basic};
  margin: 40px 20px 40px 20px;
  position: relative;
  z-index: 10;
`;

const Picture = styled.div`
  height: 65px;
  width: 100px;
  background-color: ${light.colors.fontsmall};
  border-radius: 5px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Destination = styled.h6`
  margin-top: 35px;
  display: block;
  font-size: 0.83em;
  margin-block-start: 1.67em;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Details = styled.p`
  display: block;
  margin-block-start: 0em;
  margin-block-end: 0em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 8pt;
`;

const IconButton = styled(Link)`
  width: 25px;
  height: 25px;
  outline: none;
  border: none;
  background-color: ${light.colors.basic};
  margin-bottom: 50px;
`;

export default function JourneyCard() {
  const [journeyItems, setJourneyItems] = useState([]);
  async function getJourneyItems() {
    const response = await fetch('http://localhost:4000/items');
    const newJourneys = await response.json();
    setJourneyItems(newJourneys);
  }

  React.useEffect(() => {
    getJourneyItems();
  });
  return (
    <div>
      {journeyItems.map(item => (
        <CardElement key={item.id}>
          <Picture>
            <PhotoIcon />
          </Picture>
          <Wrapper>
            <Destination>{item.title}</Destination>
            <Wrapper2>
              <Details>
                {item.date1} - {item.date2}
              </Details>
              <Details>{item.budget} verfügbar</Details>
            </Wrapper2>
          </Wrapper>
          <IconButton to="/">
            <SeeMoreIcon />
          </IconButton>
        </CardElement>
      ))}
    </div>
  );
}
