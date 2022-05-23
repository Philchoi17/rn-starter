import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {InitialScreen, LoginScreen} from '../../Screens';
import {AuthRoutes} from '../../Screens/SCREENS';

const {Navigator, Screen} = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Navigator>
      <Screen component={InitialScreen} name={AuthRoutes.INITIAL_SCREEN} />
      <Screen component={LoginScreen} name={AuthRoutes.LOGIN_SCREEN} />
    </Navigator>
  );
};

export default AuthStack;
