import { AnyAction } from "redux";
import { SET_CONTENT } from "../actions/types";


export default function content_reducer (state = {}, action: AnyAction) {
  switch (action.type) {
    case SET_CONTENT:
      return { ...action.payload };
    default:
      return { ...state };
  }
}
