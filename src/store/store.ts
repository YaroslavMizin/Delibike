import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { casesAPI, officersAPI } from "../API/Query";
import authSlice from "./slices/authSlice";
import formSlice from "./slices/formSlice";
import loadingSlice from "./slices/loadingSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    loading: loadingSlice,
    form: formSlice,
    [casesAPI.reducerPath]: casesAPI.reducer,
    [officersAPI.reducerPath]: officersAPI.reducer,
});

export const appStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().
            concat(casesAPI.middleware).
            concat(officersAPI.middleware),
    })
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof appStore>;
export type typedDispatch = AppStore['dispatch'];