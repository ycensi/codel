import { createStore as reduxCreateStore } from "redux";
import reducers from "../store/reducers"
export const createStore = () => reduxCreateStore(reducers);