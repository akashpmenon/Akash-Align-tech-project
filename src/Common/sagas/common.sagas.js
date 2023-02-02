import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import TODO_ACTIONS from '../actions/common.actions.types';
import todos from '../actions/common.actions';
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTodos() {
    todosUrl = 'https://jsonplaceholder.typicode.com/todos';
    const response = yield call(axios.get, todosUrl);    
    console.log("DATAS:", response.data);
    if (response.status >= 200 || response.status <= 299) {
        yield put(todos.setData({ data: response.data }));
    } else {
        yield put(todos.setData({ data: [] }));
    }
}

function* todoSaga() {
  yield takeLatest(TODO_ACTIONS.GET_DATA, fetchTodos);
}

export default todoSaga;