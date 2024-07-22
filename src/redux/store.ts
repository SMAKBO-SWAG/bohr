'use client'
import { configureStore } from '@reduxjs/toolkit'
import checkoutReducer from './slices/checkoutSlice'
import drawerReducer from './slices/drawerSlice'
import modalReducer from './slices/modalSlice'

export const store = configureStore({
    reducer: {
        checkout: checkoutReducer,
        drawer: drawerReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;