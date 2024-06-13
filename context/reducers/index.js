import {combineReducers} from "redux"
import userAuthReducer from "./userAuthReducer"
import projectReducer from "./projectReducer";
import { SearchReducers } from "./SearchReducers";

const myReducer = combineReducers({
    user:userAuthReducer,
    projects:projectReducer,
    Searchvalues:SearchReducers,
});

export default myReducer;