import React, { FC } from 'react';

import { StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types/navigationTypes';
import { View } from '../components/Themed';
import { LoginHolder } from '../components/AuthHolder';

const LoginScreen: FC<RootTabScreenProps<'Login'>> = () => {
  return (
    <View style={styles.container}>
      <LoginHolder />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default LoginScreen;
