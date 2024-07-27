"use client";
import { configureStore } from "@reduxjs/toolkit";
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import drawerReducer from "./slices/drawerSlice";
import modalReducer from "./slices/modalSlice";
import filterReducer from "./slices/filterSlice";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const cartPersistConfig = {
	key: "cart",
	storage,
};

const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
	reducer: {
		drawer: drawerReducer,
		modal: modalReducer,
		filter: filterReducer,
		cart: persistedCartReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
