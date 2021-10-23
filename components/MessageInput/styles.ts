import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  root: {
    marginBottom: 10,
    padding: 10,
    paddingBottom: 0,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  inputContainer: {
    marginRight: 10,
    padding: 5,
    minHeight: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.static.lightGrey3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.static.lightGrey2,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    marginBottom: 6,
    marginHorizontal: 5,
    flex: 1,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.static.blue,
    borderRadius: 20,
  },
  buttonIcon: {
    textAlign: 'center'
  }
});
