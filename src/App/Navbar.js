import React from 'react';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: 180px auto 100px 100px;
`;

export default function() {
  return (
    <Navbar>
      <div>Cryptodash</div>
      <div />
      <div>Dashboard</div>
      <div>Settings</div>
    </Navbar>
  );
}
