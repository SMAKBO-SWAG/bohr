"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
	name: string;
	number: string;
	paymentMethod: string;
}

const initialState: userState = {
	name: "",
	number: "",
	paymentMethod: "cod",
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
	},
});

export const { setName, setNumber, setPaymentMethod } = userSlice.actions;

export default userSlice.reducer;
