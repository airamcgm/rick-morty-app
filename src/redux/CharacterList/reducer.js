import INITIAL_STATE from "./initialState";
import { handleActions } from "redux-actions";
import { FETCH_CHARACTER_LIST, SET_CHARACTER_LIST } from "./actionTypes";

const fetchCharacterList = (state, action) => {};
const setCharacterList = (state, action) => {
    const { payload } = action;
    return payload;
  };
  

export const reducer = handleActions(
  {
    [FETCH_CHARACTER_LIST]: fetchCharacterList,
    [SET_CHARACTER_LIST]: setCharacterList,
  },
  INITIAL_STATE
);