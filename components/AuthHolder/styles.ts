import { StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    padding: 20,
    width: '100%',
  },
  welcomeText: {
    fontSize: 50,
    textAlign: 'center',
  },
  inputsContainer: {
    marginVertical: 30,
    flexDirection: 'column',
  },
  input: {
    paddingHorizontal: 10,
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: Colors.static.blue,
    borderRadius: 20,
  },
  password: {
    marginTop: 10,
  },
  buttonsContainer: {
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  button: {
    padding: 8,
    width: '100%',
    backgroundColor: Colors.static.blue,
    borderWidth: 2,
    borderColor: Colors.static.blue,
    borderRadius: 30,
  },
  googleBtn: {
    marginTop: 10,
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: Colors.static.white,
  },
  googleBtnText: {
    color: Colors.static.black,
  },
  suggestionContainer: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  link: {
    marginLeft: 5,
    color: Colors.static.blue,
  },
});
