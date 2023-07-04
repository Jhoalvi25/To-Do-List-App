import { AnyAction } from "redux";
import { SET_USER } from "../actions/types";

export default function user_reducer (state = {}, action: AnyAction) {
  switch (action.type) {
    case SET_USER:
      return { ...action.payload };
    default:
      return { ...state };
  }
}
