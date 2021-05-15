import React, { Suspense } from 'react';
import { useHistory } from 'react-router-dom';

import Switch from '@router/Switch';
import TopNavigationBar from '@router/TopNavigationBar';

const App = () => {
  const history = useHistory();

  React.useEffect(() => {
    history.push('/reservation');
  }, []);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <TopNavigationBar />
        <Switch />
      </Suspense>
    </div>
  );
};

export default App;
