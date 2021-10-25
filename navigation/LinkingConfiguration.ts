import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../types/navigationTypes';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Loader: 'Loader',
      Login: 'Login',
      Register: 'Register',
      Home: 'Home',
      ChatRoom: 'ChatRoom',
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
