"use client";

import { Product } from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
	cart: Product[];
}

const initialState: CartState = {
	cart: [],
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		setCart: (state, action: PayloadAction<Product>) => {
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
				cart[productIndex].amount! += product.amount!;
			} else {
				cart.push(product);
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

			cart[productIndex].amount! += 1;

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

			cart[productIndex].amount! -= 1;

			state.cart = cart;
		},
		remove: (
			state,
			action: PayloadAction<{ name: string; size: string }>
		) => {
			const cart = state.cart;

			const payload = action.payload;
			const productIndex = cart.findIndex(
				(item: any) =>
					item.name === payload.name && item.size === payload.size
			);

			cart.splice(productIndex, 1);

			state.cart = cart;
		},
		clearCart: (state) => {
			state.cart = [];
		},
	},
});

export const { setCart, incrementAmount, decrementAmount, remove, clearCart } =
	cartSlice.actions;

export default cartSlice.reducer;
