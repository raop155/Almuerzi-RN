import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { MealsScreen, ModalScreen } from './screens';

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen,
    },
  },
  { initialRouteName: 'Meals' },
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  { initialRouteName: 'Main', mode: 'modal', headerMode: 'none' },
);

const AppContainer = createAppContainer(RootStack);

export default function App() {
  return <AppContainer />;
}
