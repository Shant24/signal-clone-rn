import { AppActionTypes, IAppResetLoadedAction, IAppSetIsLoadedAction } from '../types/appTypes';

export const setAppLoadedAction = (isLoaded: boolean): IAppSetIsLoadedAction => ({
  type: AppActionTypes.SET_LOADED,
  payload: isLoaded,
})

export const setAppResetLoadedAction = (): IAppResetLoadedAction => ({
  type: AppActionTypes.RESET_LOADED,
})
