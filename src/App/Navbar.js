import React from 'react';
import styled, { css } from 'styled-components';

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
`;

function ControlButton({ name, active }) {
  return <ControlButtonElement active={active}>{name}</ControlButtonElement>;
}

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
