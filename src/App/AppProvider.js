import React from 'react';
import _ from 'lodash';
const cc = require('cryptocompare');

export const AppContext = React.createContext();
const MAX_FAVORITES = 10;
export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Dashboard',
      favorites: ['BTC', 'ETH'],
      ...this.savedSettings(),
      setPage: this.setPage,
      addCoin: this.addCoin,
      removeCoin: this.removeCoin,
      isInFavorites: this.isInFavorites,
      confirmFavorites: this.confirmFavorites
    };
  }

  addCoin = (key) => {
    let favorites = [...this.state.favorites];
    if (favorites.length < MAX_FAVORITES) {
      favorites.push(key);
      this.setState({ favorites });
    }
  };

  removeCoin = (key) => {
    let favorites = [...this.state.favorites];
    // Lodash _.pull returns a new array without the item with the passed key
    this.setState({ favorites: _.pull(favorites, key) });
  };

  isInFavorites = (key) => _.includes(this.state.favorites, key);

  componentDidMount() {
    this.fetchCoins();
    this.savedSettings();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList: coinList.Data });
  };

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'Dashboard'
    });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        favorites: this.state.favorites
      })
    );
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));

    if (!cryptoDashData) {
      return { page: 'Settings', firstVisit: true };
    }
    let { favorites } = cryptoDashData;
    return { favorites };
  }

  setPage = (page) => this.setState({ page });
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
