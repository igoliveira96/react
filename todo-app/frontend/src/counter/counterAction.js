import {COUNTER_ENUM} from "./counterEnum";

export function inc() {
  return {
    type: COUNTER_ENUM.INC
  }
}

export function dec() {
  return {
    type: COUNTER_ENUM.DEC
  }
}

export function stepChanged(e) {
  return {
    type: COUNTER_ENUM.STEP_CHANGED,
    payload: e.target.value
  }
}
