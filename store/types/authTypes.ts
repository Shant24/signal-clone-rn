export interface IAuthState {
  isLoaded: boolean;
  user: any;
}

export enum AuthActionTypes {
  SET_LOADED = 'SET_LOADED',
  SET_USER = 'SET_USER',
  SET_AUTH_TYPE = 'SET_AUTH_TYPE',
  SIGN_OUT = 'SIGN_OUT'
}

export interface IAuthSetIsLoadedAction {
  type: AuthActionTypes.SET_LOADED;
  payload: boolean;
}

export interface IAuthSetUserAction {
  type: AuthActionTypes.SET_USER;
  payload: any;
}

export type IAuthActions = IAuthSetIsLoadedAction | IAuthSetUserAction;
