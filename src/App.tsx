import React, { Suspense } from 'react';

import { Main } from '@components/Content';
import TopNavigationBar from '@router/TopNavigationBar';
import Switch from '@router/Switch';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TopNavigationBar />
      <Main>
        <Switch />
      </Main>
    </Suspense>
  );
};

export default App;
