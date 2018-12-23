import React from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from './AppProvider';
const Logo = styled.div`
  font-size: 1.5em;
`;

const ControlButtonElement = styled.div`
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      color: blue;
    `};
`;
const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
  padding: 15px 10px;
`;

function ControlButton({ name, active }) {
  return (
    // Using .Consumer from the Context to pass props to child components
    <AppContext.Consumer>
      {({ page, setPage }) => (
        <ControlButtonElement
          active={page === name}
          onClick={() => setPage(name)}>
          {name}
        </ControlButtonElement>
      )}
    </AppContext.Consumer>
  );
}

// Main navbar component
export default function() {
  return (
    <Navbar>
      <div>Cryptodash</div>
      <div />
      <ControlButton active name="Dashboard" />
      <ControlButton name="Settings" />
    </Navbar>
  );
}

// ControlButton is a component for the navbar links
