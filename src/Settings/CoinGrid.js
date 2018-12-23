import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

function getCoinsToDisplay(coinList, topGrid, favorites) {
  return topGrid
    ? favorites
    : Object.keys(coinList).slice(0, topGrid ? 10 : 100);
}

export default function({ topGrid }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites }) => (
        <CoinGridStyled>
          {getCoinsToDisplay(coinList, topGrid, favorites).map((key) => (
            <CoinTile topGrid={topGrid} coinKey={key} key={key} />
          ))}
          }}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
