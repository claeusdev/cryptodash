import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { Tile, SelectableTIle } from '../Shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((key) => (
            <SelectableTIle>{key}</SelectableTIle>
          ))}
          }}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
