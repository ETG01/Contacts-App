import React from 'react';
import AppContainer from "./src/routes"
import { Provider } from 'react-redux';
import store from './src/store/Reduxstates';
import { NativeBaseProvider } from 'native-base';


export default function App() {
  return <Provider store={store}>
  <NativeBaseProvider>
    <AppContainer/>
  </NativeBaseProvider>
  </Provider> 
}
