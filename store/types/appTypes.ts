export interface IAppState {
  isLoaded: boolean;
}

export enum AppActionTypes {
  SET_LOADED = 'SET_LOADED',
  RESET_LOADED = 'RESET_LOADED',
}

export interface IAppSetIsLoadedAction {
  type: AppActionTypes.SET_LOADED;
  payload: boolean;
}

export interface IAppResetLoadedAction {
  type: AppActionTypes.RESET_LOADED;
}

export type IAppActions = IAppSetIsLoadedAction | IAppResetLoadedAction;
