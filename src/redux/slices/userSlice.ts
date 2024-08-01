"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
	name: string;
	number: string;
	paymentMethod: string;
	totalPrice: number;
}

const initialState: userState = {
	name: "",
	number: "",
	paymentMethod: "cod",
	totalPrice: 0,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		setNumber: (state, action: PayloadAction<string>) => {
			state.number = action.payload;
		},
		setPaymentMethod: (state, action: PayloadAction<string>) => {
			state.paymentMethod = action.payload;
		},
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice = action.payload;
		},
		clearUser: (state) => {
			state.name = "";
			state.number = "";
			state.paymentMethod = "";
			state.totalPrice = 0;
		},
	},
});

export const { setName, setNumber, setPaymentMethod, setTotalPrice, clearUser } =
	userSlice.actions;

export default userSlice.reducer;
