import * as React from 'react';

import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';
import { Text, View } from '../Themed';

export interface IChatRoom {
  id: string;
  users: IUser[];
  lastMessage: ILastMessage;
  newMessages: number;
}

export interface IUser {
  id: string;
  name: string;
  imageUri: string;
  status?: string;
}

interface ILastMessage {
  id: string;
  content: string;
  createdAt: string;
}

interface IChatRoomItemProps {
  chatRoom: IChatRoom;
}

const ChatRoomItem = ({ chatRoom: { id, users, lastMessage, newMessages } }: IChatRoomItemProps) => {
  const user = users[1];
  const date = new Date(lastMessage.createdAt).toLocaleTimeString('en-EN', { hour12: true, timeStyle: 'short' });

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContainer}>
        <Image source={{ uri: user.imageUri }} style={styles.image} />

        {!!newMessages && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{newMessages > 9 ? '9+' : newMessages}</Text>
          </View>
        )}
      </View>

      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <Text style={styles.name}>{user.name}</Text>

          <Text style={styles.text}>{date}</Text>
        </View>

        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.messageText}>
          {lastMessage.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatRoomItem;
