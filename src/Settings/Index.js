import React from 'react';
import Welcome from './Welcome';
import ConfirmButton from './ConfirmButton';
import Page from '../Shared/Page';

export default function() {
  return (
    <Page>
      <Welcome />
      <ConfirmButton />
    </Page>
  );
}
