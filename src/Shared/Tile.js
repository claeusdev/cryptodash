import React from 'react';
import styled from 'styled-components';
import { subtleBoxShadow, lightBlueBackground, greenBoxShadow } from './Styles';

export const Tile = styled.div`
  ${subtleBoxShadow};
  ${lightBlueBackground};
  padding: 10px;
`;

export const SelectableTIle = styled(Tile)`
  &:hover {
    cursor: pointer;
    ${greenBoxShadow};
  }
`;
