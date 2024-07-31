"use client";

import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DrawerState {
	showDrawer: boolean;
	drawerContent: Product | null;
}

const initialState: DrawerState = {
	showDrawer: false,
	drawerContent: null,
};

export const drawerSlice = createSlice({
	name: "drawer",
	initialState,
	reducers: {
		showDrawer: (state, action: PayloadAction<Product>) => {
			state.showDrawer = true;
			state.drawerContent = action.payload;
		},
		closeDrawer: (state) => {
			state.showDrawer = false;
		},
	},
});

export const { showDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
