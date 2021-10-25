import { AuthActionTypes, IAuthSetIsLoadedAction, IAuthSetUserAction } from '../types/authTypes';

export const setAppLoadedAction = (isLoaded: boolean): IAuthSetIsLoadedAction => ({
  type: AuthActionTypes.SET_LOADED,
  payload: isLoaded,
});

export const setAppResetLoadedAction = (user: any): IAuthSetUserAction => ({
  type: AuthActionTypes.SET_USER,
  payload: user,
});
