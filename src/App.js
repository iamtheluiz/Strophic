import React from 'react';
import { StatusBar } from 'react-native';
import colors from './config/colors';

import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <Routes />
    </>
  );
};

export default App;
