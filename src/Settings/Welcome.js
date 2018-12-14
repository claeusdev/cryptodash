import React from 'react';
import { AppContext } from '../App/AppProvider';

export default function Welcome() {
  return (
    <AppContext.Consumer>
      {({ firstVisit }) => (firstVisit ? <h1>Welcome to Crytodash</h1> : null)}
    </AppContext.Consumer>
  );
}
