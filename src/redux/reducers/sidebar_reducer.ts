import { AnyAction } from "redux";
import { SIDEBAR_CLICKED, OVERLAY_CLICKED } from "../actions/types";

export default function sidebar_reducer (state = { isClicked: false }, action: AnyAction) {
  console.log("action");
  switch (action.type) {
    case SIDEBAR_CLICKED:
      return { ...state, isClicked: true };
    case OVERLAY_CLICKED:
      return { ...state, isClicked: false };
    default:
      return { ...state };
  }
}
