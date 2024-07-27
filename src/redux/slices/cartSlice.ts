'use client'

import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ItemState {
    name: string,
    size: string,
    amount: number,
}

export interface CartState {
    cart: ItemState[]
}

const initialState: CartState = {
    cart: []
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        setCart: (state, action: PayloadAction<ItemState>) => {
            const product = action.payload
            const cart = localStorage.getItem('cart');
    
            if (!cart) {
                localStorage.setItem('cart', JSON.stringify([product]));
                state.cart = [product]
                return;
            }
        
            let cartJSON = JSON.parse(cart);
            const productIndex = cartJSON.findIndex((item : any) => item.name === product.name && item.size === product.size);
        
            if (productIndex !== -1) {
                cartJSON[productIndex].amount += product.amount;
            } else {
                cartJSON.push({ name: product.name, size: product.size, amount: product.amount });
            }
        
            localStorage.setItem('cart', JSON.stringify(cartJSON));

            state.cart = cartJSON
        },
        incrementAmount: (state, action: PayloadAction<ItemState>) => {
            const cart = localStorage.getItem('cart');
            let cartJSON = JSON.parse(cart!);

            const payload = action.payload
            const productIndex = cartJSON.findIndex((item : any) => item.name === payload.name && item.size === payload.size);

            cartJSON[productIndex].amount += 1
        
            localStorage.setItem('cart', JSON.stringify(cartJSON));

            state.cart = cartJSON
        },
        decrementAmount: (state, action: PayloadAction<ItemState>) => {
            const cart = localStorage.getItem('cart');
            let cartJSON = JSON.parse(cart!);

            const payload = action.payload
            const productIndex = cartJSON.findIndex((item : any) => item.name === payload.name && item.size === payload.size);

            cartJSON[productIndex].amount -= 1
        
            localStorage.setItem('cart', JSON.stringify(cartJSON));

            state.cart = cartJSON
        }
    }
})

export const { setCart, incrementAmount, decrementAmount} = cartSlice.actions;

export default cartSlice.reducer;