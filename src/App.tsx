import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';

import { Main } from '@components/Content';
import TopNavigationBar from '@router/TopNavigationBar';
import Switch from '@router/Switch';

const App = () => {
  const history = useHistory();

  React.useEffect(() => {
    history.push('/reservation');
  }, []);

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
