/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import {
  FlatList as DefaultFlatList,
  KeyboardAvoidingView as DefaultKeyboardAvoidingView,
  SafeAreaView as DefaultSafeAreaView,
  Text as DefaultText,
  View as DefaultView,
  TextInput as DefaultTextInput,
  Pressable as DefaultPressable,
  PressableProps as DefaultPressableProps,
} from 'react-native';

import useThemeColor from '../hooks/useThemeColor';

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type KeyboardAvoidingViewProps = ThemeProps & DefaultKeyboardAvoidingView['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];
export type FlatListProps = ThemeProps & DefaultFlatList['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type PressableProps = ThemeProps & DefaultPressableProps & DefaultView['props'];

export const Text = ({ style, lightColor: light, darkColor: dark, ...otherProps }: TextProps) => {
  const color = useThemeColor({ light, dark }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = ({ style, lightColor: light, darkColor: dark, ...otherProps }: ViewProps) => {
  const backgroundColor = useThemeColor({ light, dark }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const KeyboardAvoidingView = ({
  style,
  lightColor: light,
  darkColor: dark,
  ...otherProps
}: KeyboardAvoidingViewProps) => {
  const backgroundColor = useThemeColor({ light, dark }, 'background');

  return <DefaultKeyboardAvoidingView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const SafeAreaView = ({ style, lightColor: light, darkColor: dark, ...otherProps }: SafeAreaViewProps) => {
  const backgroundColor = useThemeColor({ light, dark }, 'background');

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const FlatList = ({ style, lightColor: light, darkColor: dark, ...otherProps }: FlatListProps) => {
  const backgroundColor = useThemeColor({ light, dark }, 'background');

  return <DefaultFlatList contentContainerStyle={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TextInput = ({ style, lightColor: light, darkColor: dark, ...otherProps }: TextInputProps) => {
  const backgroundColor = useThemeColor({ light, dark }, 'background');

  return <DefaultTextInput style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const Pressable = ({ style, lightColor: light, darkColor: dark, ...otherProps }: PressableProps) => {
  const backgroundColor = useThemeColor({ light, dark }, 'background');

  return <DefaultPressable style={[{ backgroundColor }, style]} {...otherProps} />;
};
