
import { fork, takeLatest } from "redux-saga/effects";
import characterListSagas from "./CharacterList/sagas";
import { FETCH_CHARACTER_LIST} from "./CharacterList/actionTypes";

export default function* appSaga(){
    yield fork (characterListSagas, FETCH_CHARACTER_LIST);
}