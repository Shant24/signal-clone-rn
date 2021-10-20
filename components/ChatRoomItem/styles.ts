import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  leftContainer: {
    marginRight: 10,
    position: 'relative',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  badgeContainer: {
    paddingHorizontal: 3,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    right: -5,
    backgroundColor: '#3777f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    marginBottom: 3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
  },
  messageText: {
    color: 'grey',
  },
});
