import React from 'react';
import NavigationContainer from './src/navigation';
import {ApiProvider} from './src/utils/api/ApiContext';
import {Provider} from 'react-redux';
import store from './src/store/Store';

const App = () => {
  return (
    <ApiProvider>
      <Provider store={store}>
        <NavigationContainer />
      </Provider>
    </ApiProvider>
  );
};

export default App;
