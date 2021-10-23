import React from 'react';

import styles from './styles';
import { IMessage } from '../../assets/dummy-data/Chats';
import { Text, View } from '../Themed';

const myID = 'u1';

interface IMessageProps {
  message: IMessage;
}

const Message = ({ message }: IMessageProps) => {
  const isMe: boolean = message.user.id === myID;

  return (
    <View style={[styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
      <Text style={isMe ? styles.colorBlack : styles.colorWhite}>
        {message.content}
      </Text>
    </View>
  );
};

export default Message;
