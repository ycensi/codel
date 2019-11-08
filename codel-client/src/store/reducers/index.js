import { REHYDRATE, PURGE, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./user";

const configRoot = {
  key: "root",
  storage,
  blacklist: [""]
};

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: []
};

export default persistCombineReducers(rootPersistConfig, {
  user
});