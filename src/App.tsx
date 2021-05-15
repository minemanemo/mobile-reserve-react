import React from 'react';
import { useHistory } from 'react-router-dom';
import { Switch, TopNavigationBar } from './router';

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
