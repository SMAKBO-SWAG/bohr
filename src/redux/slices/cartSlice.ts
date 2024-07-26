'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs'

export interface CartState {
    name: string,
    size: string,
    amount: number,
    cart: CartState[]
}

const initialState: CartState = {
    name: '',
    size: '',
    amount: 0,
    cart: []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<CartState[]>) => {
            state.cart = action.payload
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        setSize: (state, action: PayloadAction<string>) => {
            state.size = action.payload
        },
        incrementAmount: (state) => {
            state.amount += 1
        },
        decrementAmount: (state) => {
            if (state.amount > 1) {
                state.amount -= 1;
            }
        },
        clear: (state) => {
            state.size = '',
            state.amount = 0
        }
        
    }
})

export const { setCart, setName, setSize, incrementAmount, decrementAmount, clear } = cartSlice.actions;

export default cartSlice.reducer;