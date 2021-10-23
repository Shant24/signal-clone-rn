import React, { useState } from 'react';

import { StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types';
import { FlatList, View } from '../components/Themed';
import CHAT_ROOMS, { IChatRoom } from '../assets/dummy-data/ChatRooms';
import Colors from '../constants/Colors';
import ChatRoomItem from '../components/ChatRoomItem';

const HomeScreen = (props: RootTabScreenProps<'Home'>) => {
  const [chatRooms] = useState<IChatRoom[]>(CHAT_ROOMS);

  const handleOpenChatRoom = (room: IChatRoom) => {
    props.navigation.navigate('ChatRoom');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => <ChatRoomItem
          key={item.id}
          chatRoom={item}
          handleOpenChatRoom={handleOpenChatRoom}
        />}
        showsVerticalScrollIndicator={false} // for hide scrollbar
        // onEndReached={handleEndReached} // when scroll is in bottom
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <FlatList
            data={CHAT_ROOMS}
            renderItem={({ item }) => <ChatRoomItem
              key={item.id}
              chatRoom={item}
              handleOpenChatRoom={handleOpenChatRoom}
            />}
            showsVerticalScrollIndicator={false} // for hide scrollbar
            showsHorizontalScrollIndicator={false} // for hide scrollbar
            horizontal
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: { width: '100%', height: 1, backgroundColor: Colors.static.lightGrey },
});

export default HomeScreen;
