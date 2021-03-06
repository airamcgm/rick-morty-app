import { createSelector } from "reselect";
import { get } from "lodash";

const getCharacterList = (state) => get(state, "characterList");

export const characterEntries = createSelector([getCharacterList], (list) => Object.values(list.results));
export const nextUrl = createSelector([getCharacterList], (list) => list.info.next);
export const prevUrl = createSelector([getCharacterList], (list) => list.info.prev);
