import * as React from 'react';

import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRoomItem from '../components/ChatRoomItem';
import ChatRooms from '../assets/dummy-data/ChatRooms';

const TabOneScreen = (props: RootTabScreenProps<'TabOne'>) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <FlatList
        data={ChatRooms}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        showsVerticalScrollIndicator={false} // for hide scrollbar
        // onEndReached={handleEndReached} // when scroll is in bottom
        horizontal={false}
        ListHeaderComponent={() => (
          <FlatList
            data={ChatRooms}
            renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
            showsVerticalScrollIndicator={false} // for hide scrollbar
            showsHorizontalScrollIndicator={false} // for hide scrollbar
            // onEndReached={handleEndReached} // when scroll is in bottom
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
});

export default TabOneScreen;
