import { AuthActionTypes, IAuthActions, IAuthState } from '../types/authTypes';

const initialState: IAuthState = {
  isLoaded: false,
  user: null,
};

const authReducer = (state: IAuthState = initialState, action: IAuthActions) => {
  switch (action.type) {
    case AuthActionTypes.SET_LOADED:
      return { ...state, isLoaded: action.payload };

    case AuthActionTypes.SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default authReducer;
