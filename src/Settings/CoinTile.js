import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTIle } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

export default function({ coinKey }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        const TileClass = SelectableTIle;
        return (
          <TileClass>
            <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
