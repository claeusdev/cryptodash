import React from 'react';
import styled from 'styled-components';
import CoinImage from './CoinImage';
import { DeletableTile } from '../Shared/Tile';

export const CoinHeaderGridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const CoinSymbol = styled.div`
  justify-self: right;
`;
const DeleteIcon = styled.div`
  justify-self: right;
  display: none;
  ${DeletableTile}:hover & {
    display: block;
    color: red;
  }
`;

export default function({ name, symbol, topGrid }) {
  return (
    <CoinHeaderGridStyled>
      <div>{name}</div>
      {topGrid ? <DeleteIcon>X</DeleteIcon> : <CoinSymbol>{symbol}</CoinSymbol>}
    </CoinHeaderGridStyled>
  );
}
