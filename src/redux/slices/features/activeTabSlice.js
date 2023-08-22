// src/redux/slices/activeTabSlice.js
import { createSlice } from '@reduxjs/toolkit';

const activeTabSlice = createSlice({
    name: 'activeTab',
    initialState: 'tab1', // Default active tab
    reducers: {
        setActiveTab: (state, action) => {
            return action.payload;
        },
    },
});

export const { setActiveTab } = activeTabSlice.actions;
export default activeTabSlice.reducer;