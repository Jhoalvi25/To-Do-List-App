import { combineReducers } from "redux";
import user from "./user_reducer";
import content from "./content_reducer";
import sidebar from "./sidebar_reducer";

const rootReducer = combineReducers({ user, content, sidebar });

export default rootReducer;