import { fork } from "redux-saga/effects";
import characterListSagas from "./CharacterList/sagas"

export default function* appSaga(){
    yield fork (characterListSagas);
}