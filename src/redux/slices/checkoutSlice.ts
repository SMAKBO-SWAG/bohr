'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    show: boolean
}

const initialState: ModalState = {
    show: false
}

export const checkoutSlice = createSlice({
    name:'checkout',
    initialState,
    reducers: {
        show: (state) => {state.show = true},
        close: (state) => {state.show = false}
    }
})

export const { show, close } = checkoutSlice.actions;

export default checkoutSlice.reducer;