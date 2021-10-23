import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'relative',
    marginLeft: -25,
    flexDirection: 'row',
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
    marginLeft: 45,
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
