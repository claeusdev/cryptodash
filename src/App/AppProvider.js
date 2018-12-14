import React from 'react';
const cc = require('cryptocompare');

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'Dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = await cc.coinList();
    this.setState({ coinList });
    console.log(this.state);
  };

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptodash'));
    if (!cryptoDashData) {
      return { page: 'Settings', firstVisit: true };
    }

    return {};
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'Dashboard'
    });
    localStorage.setItem(
      'cryptoDash',
      JSON.stringify({
        test: 'Hello'
      })
    );
  };

  setPage = (page) => this.setState({ page });
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
