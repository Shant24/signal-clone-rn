import { all } from 'redux-saga/effects';

import appSagasWatcher from './appSagas';
import authSagasWatcher from './authSagas';

export default function* rootSagas() {
  yield all([appSagasWatcher(), authSagasWatcher()]);
}
