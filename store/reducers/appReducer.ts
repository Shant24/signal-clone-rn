import { IAppState, AppActionTypes, IAppActions } from '../types/appTypes';

const initialState: IAppState = {
  isLoaded: false,
};

const appReducer = (state: IAppState = initialState, action: IAppActions) => {
  switch (action.type) {
    case AppActionTypes.SET_LOADED:
      return { ...state, isLoaded: action.payload };

    case AppActionTypes.RESET_LOADED:
      return { ...state, isLoaded: initialState.isLoaded };

    default:
      return state;
  }
};

export default appReducer;
