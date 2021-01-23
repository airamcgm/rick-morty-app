import { takeLatest, all, call, put } from "redux-saga/effects";
import { FETCH_CHARACTER_LIST } from "./actionTypes";
import { setCharacterList} from "./actions";
import API from "../../services/api";

export function* fetchCharacterList() {
  const response = yield call(API.fetchCharacters);
  yield put(setCharacterList(response));
}

export default function* characterListSagas() {
  yield all([takeLatest(FETCH_CHARACTER_LIST, fetchCharacterList)]);
}
