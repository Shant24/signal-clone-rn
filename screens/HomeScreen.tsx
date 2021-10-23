import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types/navigationTypes';
import { FlatList, View } from '../components/Themed';
import CHAT_ROOMS, { IChatRoom } from '../assets/dummy-data/ChatRooms';
import ChatRoomItem from '../components/ChatRoomItem';

const HomeScreen = (props: RootTabScreenProps<'Home'>) => {
  const [chatRooms] = useState<IChatRoom[]>(CHAT_ROOMS);

  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatRoomItem
          key={item.id}
          chatRoom={item}
        />}
        showsVerticalScrollIndicator={false} // for hide scrollbar
        // onEndReached={handleEndReached} // when scroll is in bottom
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
