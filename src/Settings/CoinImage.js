import React from 'react';

export default function({ coin, style }) {
  return (
    <img
      style={style || { height: '50px' }}
      src={`https://cryptocompare.com/${coin.ImageUrl}`}
      alt={coin.CoinSymbol}
    />
  );
}
