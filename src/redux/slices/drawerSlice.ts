'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ModalState {
    show: boolean,
    name: string
}

const initialState: ModalState = {
    show: false,
    name: ''
}

export const drawerSlice = createSlice({
    name:'drawer',
    initialState,
    reducers: {
        show: (state, action: PayloadAction<string>) => {
            state.show = true,
            state.name = action.payload
        },
        close: (state) => {state.show = false}
    }
})

export const { show, close } = drawerSlice.actions;

export default drawerSlice.reducer;