import React from 'react';
import {Div, Text, Button} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';

import {AuthNavProps} from '../../Navigation/NavParams';

const Login = () => {
  const navigation = useNavigation<AuthNavProps>();
  return (
    <Div>
      <Text>Login</Text>
      <Button onPress={() => navigation.goBack()}>
        <Text>Go to back</Text>
      </Button>
    </Div>
  );
};

export default Login;
