import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { rootReducer } from "./reducers"
import { configureStore } from "@reduxjs/toolkit"

const persistConfig={
    key:"root",
    storage,
    whitelist:["cart"]
}

const persistedReducer=persistReducer(persistConfig,rootReducer)
export const store=configureStore({
    reducer:persistedReducer
})

export const persistor=persistStore(store)