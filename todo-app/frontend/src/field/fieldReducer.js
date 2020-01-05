import {FIELD_ENUM} from "./fieldEnum";

const INITIAL_STATE = { value: 'Opa' };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FIELD_ENUM.CHANGE_VALUE:
      return { value: action.payload };
    default:
      return state;
  }
}
