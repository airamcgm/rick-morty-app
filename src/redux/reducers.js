import { combineReducers } from "redux";

import { reducer as characterListReducer } from "./CharacterList/reducer"

const rootReducer = () =>
  combineReducers({
    characterList: characterListReducer
  });
  
export default rootReducer;
