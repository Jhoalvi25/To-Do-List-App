import { SET_CONTENT } from "./types";

export const SetContent = (content: string) => {
  return {
    type: SET_CONTENT,
    payload: content,
  };
};