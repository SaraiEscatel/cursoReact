import { SET_VISIBILITY_FILTER } from "../actions/actions";

let initialSatate = "SHOW_ALL";

export const filterReducers = (state = initialSatate, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter;

    default:
      return state;
  }
};
