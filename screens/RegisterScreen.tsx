import React, { FC } from 'react';

import { StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types/navigationTypes';
import { View } from '../components/Themed';
import { RegisterHolder } from '../components/AuthHolder';

const RegisterScreen: FC<RootTabScreenProps<'Register'>> = () => {
  return (
    <View style={styles.container}>
      <RegisterHolder />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RegisterScreen;
