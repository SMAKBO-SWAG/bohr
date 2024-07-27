"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ModalContentState  {
    title: string,
    body: string,
    action: string,
    params: any
}

export interface ModalState {
	show: boolean;
    content: ModalContentState;
}

const initialState: ModalState = {
	show: false,
    content: {
        title: "",
        body: "",
        action: "",
        params: null
    }
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		show: (state, action: PayloadAction<ModalContentState>) => {
			state.show = true,
            state.content = action.payload;
		},
		close: (state) => {
			state.show = false;
		},
	},
});

export const { show, close } = modalSlice.actions;

export default modalSlice.reducer;
