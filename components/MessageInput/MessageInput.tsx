import React, { useState } from 'react';

import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import styles from './styles';
import { KeyboardAvoidingView, Pressable, TextInput, View } from '../Themed';
import Colors from '../../constants/Colors';
import { Platform } from 'react-native';

const MessageInput = () => {
  const [message, setMessage] = useState<string>('');

  const sendMessage = () => {
    console.warn('sending: ', message);
    setMessage('');
  };

  const handlePlusClick = () => {
    console.warn('On plus clicked');
  };

  const handlePress = () => {
    if (message) {
      sendMessage();
    } else {
      handlePlusClick();
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.root}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={ifIphoneX(100, 70)}
    >
      <View style={styles.inputContainer}>
        <SimpleLineIcons style={styles.icon} name="emotsmile" size={24} color={Colors.static.darkGrey} />

        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Signal message..."
          multiline
          numberOfLines={10}
          underlineColorAndroid="transparent"
        />

        <Feather style={styles.icon} name="camera" size={24} color={Colors.static.darkGrey} />

        <MaterialCommunityIcons
          style={styles.icon}
          name="microphone-outline"
          size={24}
          color={Colors.static.darkGrey}
        />
      </View>

      <Pressable style={styles.buttonContainer} onPress={handlePress}>
        {message ? (
          <Ionicons style={styles.buttonIcon} name="send" size={18} color={Colors.static.white} />
        ) : (
          <AntDesign style={styles.buttonIcon} name="plus" size={24} color={Colors.static.white} />
        )}
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;
