import React from 'react';
import MainStack from './Screens/Stack'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default function App() {
  return (
    <Provider store={Store}>
      <MainStack/>
    </Provider>
  );
}
