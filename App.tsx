import React  from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackScreen from './src/navigation/StackScreen';
import { Provider } from 'react-redux';
import { store } from './src/redux';


const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StackScreen />
      </Provider>
    </NavigationContainer>
  );
};

export default App;