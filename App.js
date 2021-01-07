import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LoginScreen, RegisterScreen, MealsScreen, ModalScreen } from './screens';

const OnBoardingNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Register: {
      screen: RegisterScreen,
    },
  },
  { initialRouteName: 'Login' },
);

const AppNavigator = createStackNavigator(
  {
    Meals: {
      screen: MealsScreen,
    },
  },
  { initialRouteName: 'Meals' },
);

const RootNavigator = createStackNavigator(
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

const SwitchNavigator = createSwitchNavigator(
  {
    OnBoarding: OnBoardingNavigator,
    Root: RootNavigator,
  },
  {
    initialRouteName: 'OnBoarding',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default function App() {
  return <AppContainer />;
}
