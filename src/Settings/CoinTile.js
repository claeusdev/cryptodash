import React from 'react';
import { AppContext } from '../App/AppProvider';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';
import CoinImage from './CoinImage';

export default function({ coinKey, topGrid }) {
  return (
    <AppContext.Consumer>
      {({ coinList }) => {
        let coin = coinList[coinKey];
        let TileClass = SelectableTile;

        if (topGrid) {
          TileClass = DeletableTile;
        }
        return (
          <TileClass>
            <CoinHeaderGrid
              topGrid={topGrid}
              name={coin.CoinName}
              symbol={coin.Symbol}
            />
            <CoinImage coin={coin} />
          </TileClass>
        );
      }}
    </AppContext.Consumer>
  );
}
