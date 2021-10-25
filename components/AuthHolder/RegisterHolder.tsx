import React, { useState } from 'react';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { auth } from '../../firebase';
import useThemeColor from '../../hooks/useThemeColor';
import { Pressable, Text, TextInput, TouchableOpacity, View } from '../Themed';

const RegisterHolder = () => {
  const color = useThemeColor({}, 'text');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigation = useNavigation();

  const handleRegister = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log('user', user);
      })
      .catch((error) => alert(error.message));
  };

  const handleRegisterWithGoogle = () => {
  };

  const handleGoToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Register</Text>

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
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.googleBtn]} onPress={handleRegisterWithGoogle}>
          <Text style={[styles.buttonText, styles.googleBtnText, { color }]}>Register with Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.suggestionContainer}>
        <Text>If you already have an account?</Text>
        <Pressable onPress={handleGoToLogin}><Text style={styles.link}>Login</Text></Pressable>
      </View>
    </View>
  );
};

export default RegisterHolder;
