import { createAction } from "redux-actions";
import { FETCH_CHARACTER_LIST, SET_CHARACTER_LIST } from "./actionTypes";

export const fetchCharacterList = (page) => ({ type: FETCH_CHARACTER_LIST, page });
export const setCharacterList = createAction(SET_CHARACTER_LIST);