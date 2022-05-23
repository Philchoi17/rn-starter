import React from 'react';
import {Div, Text, Button} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';

import {AuthNavProps} from '../../Navigation/NavParams';
import {AuthRoutes} from '../SCREENS';

const Initial = () => {
  const navigation = useNavigation<AuthNavProps>();

  return (
    <Div justifyContent="center" alignItems="center" flex={1}>
      <Text>Initial</Text>
      <Button
        onPress={() => {
          navigation.navigate(AuthRoutes.LOGIN_SCREEN);
        }}>
        <Text>Go to Login</Text>
      </Button>
    </Div>
  );
};

export default Initial;
