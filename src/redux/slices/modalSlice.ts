"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReactNode } from "react";

export interface ModalState {
	showModal: boolean;
	modalContent: ReactNode | null;
}

const initialState: ModalState = {
	showModal: false,
	modalContent: null,
};

export const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		showModal: (state, action: PayloadAction<ReactNode>) => {
			state.showModal = true;
			state.modalContent = action.payload;
		},
		closeModal: (state) => {
			state.showModal = false;
		},
	},
});

export const { showModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
