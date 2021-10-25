import React, { FC, useState } from 'react';

import { StyleSheet } from 'react-native';

import { RootTabScreenProps } from '../types/navigationTypes';
import useAuth from '../hooks/useAuth';
import CHAT_ROOMS, { IChatRoom } from '../assets/dummy-data/ChatRooms';
import Colors from '../constants/Colors';
import { FlatList, Text, TouchableOpacity, View } from '../components/Themed';
import ChatRoomItem from '../components/ChatRoomItem';

const HomeScreen: FC<RootTabScreenProps<'Home'>> = () => {
  const [chatRooms] = useState<IChatRoom[]>(CHAT_ROOMS);
  const { auth } = useAuth();

  const handleLogout = () => {
    auth.signOut().then(console.log).catch(console.warn);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatRooms}
        renderItem={({ item }) => (
          <ChatRoomItem
            key={item.id}
            chatRoom={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutContainer: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.static.black,
  },
  logoutText: {
    fontSize: 20,
  },
});

export default HomeScreen;
