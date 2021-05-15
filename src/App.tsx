import React from 'react';
import { useHistory } from 'react-router-dom';

import Switch from '@router/Switch';
import TopNavigationBar from '@router/TopNavigationBar';

const App = () => {
  const history = useHistory();

  React.useEffect(() => {
    history.push('/about');
  }, []);

  return (
    <div>
      <TopNavigationBar />
      <Switch />
    </div>
  );
};

export default App;
