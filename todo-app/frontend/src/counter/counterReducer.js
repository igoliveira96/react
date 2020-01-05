import {COUNTER_ENUM} from "./counterEnum";

const INITIAL_STATE = { step: 1, number: 0 };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case COUNTER_ENUM.INC:
      return {...state, number: state.number + state.step };
    case COUNTER_ENUM.DEC:
      return {...state, number: state.number - state.step };
    case COUNTER_ENUM.STEP_CHANGED:
      return {...state, step: +action.payload};
    default:
      return state;
  }
}
