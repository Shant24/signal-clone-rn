/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import React from 'react';
import {
  FlatList as DefaultFlatList,
  KeyboardAvoidingView as DefaultKeyboardAvoidingView,
  Pressable as DefaultPressable,
  PressableProps as DefaultPressableProps,
  SafeAreaView as DefaultSafeAreaView,
  Text as DefaultText,
  TextInput as DefaultTextInput,
  TouchableOpacity as DefaultTouchableOpacity,
  View as DefaultView,
} from 'react-native';

import useThemeColor from '../hooks/useThemeColor';

type ThemeProps = {
  ref?: any;
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type KeyboardAvoidingViewProps = ThemeProps & DefaultKeyboardAvoidingView['props'];
export type SafeAreaViewProps = ThemeProps & DefaultSafeAreaView['props'];
export type FlatListProps = ThemeProps & DefaultFlatList['props'];
export type TextInputProps = ThemeProps & DefaultTextInput['props'];
export type TouchableOpacityProps = ThemeProps & DefaultTouchableOpacity['props'];
export type PressableProps = ThemeProps & DefaultPressableProps & DefaultView['props'];

export const Text = ({ ref, style, lightColor, darkColor, ...otherProps }: TextProps) => {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
};

export const View = ({ style, lightColor, darkColor, ...otherProps }: ViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const KeyboardAvoidingView = ({ style, lightColor, darkColor, ...otherProps }: KeyboardAvoidingViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultKeyboardAvoidingView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const SafeAreaView = ({ style, lightColor, darkColor, ...otherProps }: SafeAreaViewProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const FlatList = ({ style, lightColor, darkColor, ...otherProps }: FlatListProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultFlatList contentContainerStyle={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TextInput = ({ style, lightColor, darkColor, ...otherProps }: TextInputProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultTextInput style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const Pressable = ({ style, lightColor, darkColor, ...otherProps }: PressableProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultPressable style={[{ backgroundColor }, style]} {...otherProps} />;
};

export const TouchableOpacity = ({ style, lightColor, darkColor, ...otherProps }: TouchableOpacityProps) => {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <DefaultTouchableOpacity style={[{ backgroundColor }, style]} {...otherProps} />;
};
