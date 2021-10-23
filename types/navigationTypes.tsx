/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/core/lib/typescript/src/types';
import { ParamListBase } from '@react-navigation/routers';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
    }
  }
}

export type RootStackParamList = {
  Home: undefined;
  ChatRoom: { id?: string };
  Modal: undefined;
  NotFound: undefined;
};

export type UseRouteType<Screen extends keyof RootStackParamList> =
  { params: RootStackParamList[Screen] } & RouteProp<ParamListBase>

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabScreenProps<Screen extends keyof RootStackParamList> =
  CompositeScreenProps<BottomTabScreenProps<RootStackParamList, Screen>, NativeStackScreenProps<RootStackParamList>>;
