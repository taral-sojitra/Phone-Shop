import { combineReducers } from "redux";
import { defaultReducer } from "./AllFolderReducers";

export const reducer = combineReducers({

    DefaultReducer: defaultReducer
})