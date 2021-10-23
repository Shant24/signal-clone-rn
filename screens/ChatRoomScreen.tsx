import React from 'react';

import { StyleSheet } from 'react-native';

import { FlatList, SafeAreaView } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import CHAT_ROOM_DATA from '../assets/dummy-data/Chats';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

const ChatRoom = (props: RootTabScreenProps<'ChatRoom'>) => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={CHAT_ROOM_DATA.messages}
        renderItem={({ item }) => <Message key={item.id} message={item} />}
        inverted={false}
        contentContainerStyle={styles.messagesContainer}
      />

      <MessageInput />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  messagesContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default ChatRoom;
