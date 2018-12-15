import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export default function() {
  return (
    <AppContext.Consumer>
      {({ coinList }) => (
        <CoinGridStyled>
          {Object.keys(coinList).map((key) => (
            <div>{key}</div>
          ))}
          }}
        </CoinGridStyled>
      )}
    </AppContext.Consumer>
  );
}
