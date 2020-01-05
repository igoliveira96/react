import { TODO_ENUM } from "./todoEnum";

const INITIAL_STATE = {
  description: '',
  list: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO_ENUM.DESCRIPTION_CHANGED:
      return {...state, description: action.payload};
    case TODO_ENUM.TODO_SEARCH:
      return {...state, list: action.payload.data};
    case TODO_ENUM.TODO_ADDED:
      return {...state, description: ''};
    default:
      return state;
  }
}
