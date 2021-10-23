import React, { FC, memo, useEffect } from 'react';

import { StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FlatList, SafeAreaView } from '../components/Themed';
import { RootTabScreenProps, UseRouteType } from '../types/navigationTypes';
import CHAT_ROOM_DATA from '../assets/dummy-data/Chats';
import Message from '../components/Message';
import MessageInput from '../components/MessageInput';

const ChatRoom: FC<RootTabScreenProps<'ChatRoom'>> = () => {
  const route = useRoute<UseRouteType<'ChatRoom'>>();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ title: 'Elon Mask' });
  }, [route.params.id]);

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
