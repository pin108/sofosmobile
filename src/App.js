import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
// import store from './redux/store';
import Route from './route';
import { Provider } from 'react-redux';
import store from './redux/store';
import Toast from 'react-native-toast-message';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Route />
      <Toast />
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
