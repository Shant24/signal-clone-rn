import React from 'react';

import { ColorSchemeName } from 'react-native';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from '../types/navigationTypes';
import LinkingConfiguration from './LinkingConfiguration';
import useAuth from '../hooks/useAuth';
import {
  ChatRoomScreen,
  HomeScreen,
  LoaderScreen,
  LoginScreen,
  ModalScreen,
  NotFoundScreen,
  RegisterScreen,
} from '../screens';
import HomeHeader from '../components/HomeHeader';
import ChatRoomHeader from '../components/ChatRoomHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Loader"
            component={LoaderScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  if (!user) {
    return (
      <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerTitle: HomeHeader }}
        />
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{ headerTitle: ChatRoomHeader, headerBackTitleVisible: false }}
        />
        <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ headerShown: true, title: 'Oops!' }} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="Modal" component={ModalScreen} options={{ headerShown: true, animation: 'default' }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
