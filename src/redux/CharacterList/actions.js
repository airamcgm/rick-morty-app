import { createAction } from "redux-actions";
import { FETCH_CHARACTER_LIST, SET_CHARACTER_LIST, SET_ERROR } from "./actionTypes";

export const fetchCharacterList = (parameter, page) => ({ type: FETCH_CHARACTER_LIST, parameter, page });
export const setError = (error) => ({ type: SET_ERROR, error});
export const setCharacterList = createAction(SET_CHARACTER_LIST);