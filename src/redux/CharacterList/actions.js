import { createAction } from "redux-actions";
import { FETCH_CHARACTER_LIST, SET_CHARACTER_LIST } from "./actionTypes";

export const fetchCharacterList = createAction(FETCH_CHARACTER_LIST);
export const setCharacterList = createAction(SET_CHARACTER_LIST);