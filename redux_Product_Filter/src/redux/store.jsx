import { configureStore } from "@reduxjs/toolkit";
// import { productReducer } from "./reducers/productsReducers";
import { persistReducer, persistStore } from "redux-persist";
import { rootReducer } from "./reducers";
import storage from "redux-persist/lib/storage"

const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
}   

const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
    reducer:persistedReducer
}) 
// export const store=createStore(persistedReducer)
export const persistor=persistStore(store)