import React, { FC } from 'react';

import { StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types/navigationTypes';
import { ActivityIndicator, View } from '../components/Themed';

const LoaderScreen: FC<RootTabScreenProps<'Login'>> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoaderScreen;
