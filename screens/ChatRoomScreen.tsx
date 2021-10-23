import React, { memo } from 'react';

import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FlatList, SafeAreaView } from '../components/Themed';
import { RootTabScreenProps, UseRouteType } from '../types/navigationTypes';
import CHAT_ROOM_DATA from '../assets/dummy-data/Chats';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

const ChatRoom = (props: RootTabScreenProps<'ChatRoom'>) => {
  const route = useRoute<UseRouteType<'ChatRoom'>>();
  const navigation = useNavigation();

  navigation.setOptions({title: 'Elon Mask'});

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

export default memo(ChatRoom);
