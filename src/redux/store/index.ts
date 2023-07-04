import { AnyAction, applyMiddleware, createStore } from "redux";
import promiseMiddleware from "redux-promise";
import { ThunkDispatch} from "redux-thunk";
import ReduxThunk from "redux-thunk";

type State = { a: string };

export const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  ReduxThunk
)(createStore);


export type AppDispatch = ThunkDispatch<State, any, AnyAction>;
