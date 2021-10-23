import React from 'react';

import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { IChatRoom } from '../../assets/dummy-data/ChatRooms';
import { Pressable, Text, View } from '../Themed';

interface IChatRoomItemProps {
  chatRoom: IChatRoom;
}

const ChatRoomItem = ({ chatRoom }: IChatRoomItemProps) => {
  const { users, lastMessage, newMessages } = chatRoom;
  const navigation = useNavigation();

  const user = users[1];
  const date = new Date(lastMessage.createdAt).toLocaleTimeString('en-EN', {
    hour12: true,
    // @ts-ignore
    timeStyle: 'short',
  });

  const handlePress = () => {
    navigation.navigate('ChatRoom', { id: chatRoom.id });
  };

  return (
    <Pressable style={styles.container} onPress={handlePress}>
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

        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.text}>
          {lastMessage.content}
        </Text>
      </View>
    </Pressable>
  );
};

export default ChatRoomItem;
