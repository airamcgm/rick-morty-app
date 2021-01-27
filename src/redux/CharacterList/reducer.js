import INITIAL_STATE from "./initialState";
import { handleActions } from "redux-actions";
import { FETCH_CHARACTER_LIST, SET_CHARACTER_LIST, SET_ERROR } from "./actionTypes";

const fetchCharacterList = (state, action) => {};
const setCharacterList = (state, action) => {
    const { payload } = action;
    return payload;
  };

const setError = (state, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};
  

export const reducer = handleActions(
  {
    [FETCH_CHARACTER_LIST]: fetchCharacterList,
    [SET_CHARACTER_LIST]: setCharacterList,
    [SET_ERROR]: setError,
  },
  INITIAL_STATE
);