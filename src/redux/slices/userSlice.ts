"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface userState {
	name: string;
	number: string;
	paymentMethod: string;

    province?: string;
    city?: string;
    address?: string;

    ongkir?: number;
	totalPrice: number;
    valid: boolean
}

const initialState: userState = {
	name: "",
	number: "",
	paymentMethod: "cod",
    province: "",
    city: "",
    address: "",
	totalPrice: 0,
    valid: true
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
        setProvince: (state, action: PayloadAction<string>) => {
			state.province = action.payload;
		},
        setCity: (state, action: PayloadAction<string>) => {
			state.city = action.payload;
		},
        setAddress: (state, action: PayloadAction<string>) => {
			state.address = action.payload;
		},
        setOngkir: (state, action: PayloadAction<number>) => {
			state.ongkir = action.payload;
		},
		setTotalPrice: (state, action: PayloadAction<number>) => {
			state.totalPrice = action.payload;
		},
        valid: (state, action: PayloadAction<boolean>) => {
            state.valid = action.payload
        },
		clearUser: (state) => {
			state.name = "";
			state.number = "";
			state.paymentMethod = "cod";
            state.address = "";
            state.city = "";
            state.province = "";
            state.ongkir = 0;
			state.totalPrice = 0;
		},
	},
});

export const { setName, setNumber, setPaymentMethod, setProvince, setCity, setAddress, setOngkir, setTotalPrice, valid, clearUser } =
	userSlice.actions;

export default userSlice.reducer;
