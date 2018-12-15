import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { color3, fontSize1, greenBoxShadow } from '../Shared/Styles';

const ConfirmedButtonStyled = styled.div`
  margin: 20px;
  color: ${color3};
  ${fontSize1} padding: 5px;
  cursor: pointer;
  &:hover {
    ${greenBoxShadow};
  }
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
