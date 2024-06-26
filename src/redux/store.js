import {combineReducers, configureStore} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {persistReducer, persistStore,FLUSH,REHYDRATE,REGISTER,PERSIST,PURGE} from "redux-persist"
import UserReducer from "./UserReducer"


const rootReducer = combineReducers({
    AuthReducer: UserReducer.reducer,
})

const persistConfig = {
    key:'root',
    storage,
    whitelist: ['AuthReducer']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, REGISTER, PERSIST, PURGE]
        }
    })
})
export let persistor = persistStore(store)