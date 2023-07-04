import { SET_USER } from "./types";
export const SetUser = (user: string) => {
  return {
    type: SET_USER,
    payload: user,
  };
};