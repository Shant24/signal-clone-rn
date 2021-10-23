import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  userImage: {
    position: 'absolute',
    left: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  title: {
    color: Colors.static.black,
    fontSize: 20,
    fontWeight: 'bold',
  },
  rightContainer: {
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    marginHorizontal: 8,
  },
});
