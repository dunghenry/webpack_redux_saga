import { takeEvery, call, put } from 'redux-saga/effects';
import * as api from '../apis/todo';
import * as action from '../reducers/todoSlice';
function* getTodos() {
    try {
        const response = yield call(api.getTodos);
        yield put(action.getTodosSuccess(response.data));
    } catch (err) {
        actions.getTodosFailure();
    }
}
function* todoSaga() {
    yield takeEvery(action.getTodosStart.toString(), getTodos);
}

export default todoSaga;
