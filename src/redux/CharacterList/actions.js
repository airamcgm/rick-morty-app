import { createAction } from "redux-actions";
import { FETCH_CHARACTER_LIST, SET_CHARACTER_LIST } from "./actionTypes";

export const fetchCharacterList = (parameter,page) => ({ type: FETCH_CHARACTER_LIST, parameter, page });
export const setCharacterList = createAction(SET_CHARACTER_LIST);