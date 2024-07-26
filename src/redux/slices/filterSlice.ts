'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterSlice {
    filter: string;
}

const initialState: FilterSlice = {
    filter: 'All'
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        }
    }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;