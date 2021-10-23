import React, { FC } from 'react';

import { Image, useWindowDimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import { Text, View } from '../Themed';

interface IHomeHeaderProps {
  children: string;
  tintColor?: string;
}

const HomeHeader: FC<IHomeHeaderProps> = ({ tintColor }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Image
        style={[styles.userImage, styles.icon]}
        source={{ uri: 'https://scontent.fevn8-1.fna.fbcdn.net/v/t1.6435-1/c12.53.192.192a/p240x240/93404452_2966084290148011_477263264217038848_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=y8iRwqhyMTkAX8UKU-5&tn=jppgPgWND5kizXiW&_nc_ht=scontent.fevn8-1.fna&oh=2bf0b94c5e5a731307b5a78a077e67f1&oe=6197E7FC' }}
      />

      <Text style={[styles.title, { color: tintColor }]}>Signal</Text>

      <View style={styles.rightContainer}>
        <Feather style={styles.icon} name="camera" size={24} color="black" />
        <Feather style={styles.icon} name="edit-2" size={24} color="black" />
      </View>
    </View>
  );
};

export default HomeHeader;
