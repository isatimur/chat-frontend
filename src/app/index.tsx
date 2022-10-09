import React from 'react';
import { withHocs } from './hocs';

export const App = withHocs(() => {
  return <div data-testid="gc-app">main page</div>;
});
