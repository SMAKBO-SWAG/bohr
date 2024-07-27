"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalContentState {
	illustration: string;
	title: string;
	body: string;
	action: string;
    button: string;
	params: any;
}

export interface ModalState {
	show: boolean;
	content: ModalContentState;
}

const initialState: ModalState = {
	show: false,
	content: {
		illustration: "",
		title: "",
		body: "",
		action: "",
        button: "",
		params: null,
	},
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		show: (state, action: PayloadAction<ModalContentState>) => {
			(state.show = true), (state.content = action.payload);
		},
		close: (state) => {
			state.show = false;
		},
	},
});

export const { show, close } = modalSlice.actions;

export default modalSlice.reducer;
