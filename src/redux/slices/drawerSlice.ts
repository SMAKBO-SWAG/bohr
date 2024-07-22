'use client'

import { createSlice } from '@reduxjs/toolkit'

export interface ModalState {
    show: boolean
}

const initialState: ModalState = {
    show: false
}

export const drawerSlice = createSlice({
    name:'drawer',
    initialState,
    reducers: {
        show: (state) => {state.show = true},
        close: (state) => {state.show = false}
    }
})

export const { show, close } = drawerSlice.actions;

export default drawerSlice.reducer;