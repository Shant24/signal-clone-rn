import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    maxWidth: '75%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  leftContainer: {
    marginRight: 'auto',
    backgroundColor: Colors.static.blue,
  },
  rightContainer: {
    marginLeft: 'auto',
    backgroundColor: Colors.static.lightGrey,
  },
  colorWhite: {
    color: Colors.static.white,
  },
  colorBlack: {
    color: Colors.static.black,
  },
});
