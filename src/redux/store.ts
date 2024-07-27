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

const drawerPersistConfig = {
	key: "drawer",
	storage,
};

const modalPersistConfig = {
	key: "modal",
	storage,
};

const filterPersistConfig = {
	key: "filter",
	storage,
};

const cartPersistConfig = {
	key: "cart",
	storage,
};

const persistedDrawerReducer = persistReducer(
	drawerPersistConfig,
	drawerReducer
);
const persistedModalReducer = persistReducer(modalPersistConfig, modalReducer);
const persistedFilterReducer = persistReducer(
	filterPersistConfig,
	filterReducer
);
const persistedCartReducer = persistReducer(cartPersistConfig, cartReducer);

export const store = configureStore({
	reducer: {
		drawer: persistedDrawerReducer,
		modal: persistedModalReducer,
		filter: persistedFilterReducer,
		cart: persistedCartReducer,
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
