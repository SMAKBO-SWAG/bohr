"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemState {
	name: string;
	size: string;
	amount: number;
}

export interface CartState {
	cart: ItemState[];
}

const initialState: CartState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<ItemState>) => {
			const product = action.payload;
			const cart = state.cart;

			if (!cart) {
				state.cart = [product];
				return;
			}

			const productIndex = cart.findIndex(
				(item: any) =>
					item.name === product.name && item.size === product.size
			);

			if (productIndex !== -1) {
				cart[productIndex].amount += product.amount;
			} else {
				cart.push({
					name: product.name,
					size: product.size,
					amount: product.amount,
				});
			}

			state.cart = cart;
		},
		incrementAmount: (
			state,
			action: PayloadAction<{ name: string; size: string }>
		) => {
			const cart = state.cart;

			const payload = action.payload;
			const productIndex = cart.findIndex(
				(item: any) =>
					item.name === payload.name && item.size === payload.size
			);

			cart[productIndex].amount += 1;

			state.cart = cart;
		},
		decrementAmount: (
			state,
			action: PayloadAction<{ name: string; size: string }>
		) => {
			const cart = state.cart;

			const payload = action.payload;
			const productIndex = cart.findIndex(
				(item: any) =>
					item.name === payload.name && item.size === payload.size
			);

			cart[productIndex].amount -= 1;

			state.cart = cart;
		},
	},
});

export const { setCart, incrementAmount, decrementAmount } = cartSlice.actions;

export default cartSlice.reducer;
