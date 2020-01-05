import { FIELD_ENUM } from "./fieldEnum";

export function changeValue(e) {
  return {
    type: FIELD_ENUM.CHANGE_VALUE,
    payload: e.target.value // Dado que vem junto com uma ação
  }
}
