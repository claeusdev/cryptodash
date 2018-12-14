import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';

const ConfirmedButtonStyled = styled.div`
  margin: 20px;
  color: green;
  cursor: pointer;
`;

export const CenterDiv = styled.div`
  display: grid;
  justify-content: center;
`;

export default function() {
  return (
    // Consuming the Contex from the provider
    <AppContext.Consumer>
      {({ confirmFavorites }) => (
        //  Using css grid to center button
        <CenterDiv>
          <ConfirmedButtonStyled onClick={confirmFavorites}>
            Confirm Favorites
          </ConfirmedButtonStyled>
        </CenterDiv>
      )}
    </AppContext.Consumer>
  );
}
