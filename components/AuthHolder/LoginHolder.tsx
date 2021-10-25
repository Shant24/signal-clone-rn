import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { auth } from '../../firebase';
import useThemeColor from '../../hooks/useThemeColor';
import { Pressable, Text, TextInput, TouchableOpacity, View } from '../Themed';

const LoginHolder = () => {
  const navigation = useNavigation();
  const color = useThemeColor({}, 'text');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('user', user);
      })
      .catch((error) => alert(error.message));
  };

  const handleLoginWithGoogle = () => {
  };

  const handleGoToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Login</Text>

      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          placeholder="Email"
          placeholderTextColor={'#4790dc'}
          onChangeText={setEmail}
        />
        <TextInput
          style={[styles.input, styles.password]}
          placeholder="Password"
          textContentType="password"
          passwordRules="required: upper; required: lower; required: digit; max-consecutive: 2; minlength: 8;"
          secureTextEntry
          keyboardType="default"
          autoCapitalize="none"
          autoCorrect={false}
          value={password}
          placeholderTextColor={'#4790dc'}
          onChangeText={setPassword}
        />
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.googleBtn]} onPress={handleLoginWithGoogle}>
          <Text style={[styles.buttonText, styles.googleBtnText, { color }]}>Login with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.suggestionContainer}>
        <Text>If you didn't have an account?</Text>
        <Pressable onPress={handleGoToRegister}><Text style={styles.link}>Register</Text></Pressable>
      </View>
    </View>
  );
};

export default LoginHolder;
