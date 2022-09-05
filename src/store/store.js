import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
import logger from './logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
const saga = createSagaMiddleware();
const store = configureStore({
    reducer: logger(rootReducer),
    middleware: [saga],
});
saga.run(rootSaga);
export default store;
