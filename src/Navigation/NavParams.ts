// import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {AuthRoutes} from '../Screens/SCREENS';
// import {Stacks} from './Stacks/STACKS';

export type AuthStackParams = {
  [AuthRoutes.INITIAL_SCREEN]: undefined;
  [AuthRoutes.LOGIN_SCREEN]: undefined;
};

export type AuthNavProps = NativeStackNavigationProp<
  AuthStackParams,
  AuthRoutes
>;
