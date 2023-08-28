// displaySlice.js
import { createSlice } from '@reduxjs/toolkit';

const displaySlice = createSlice({
    name: 'display',
    initialState: {
        showAllGuides: true, // Initial state: show AllGuides_comp
    },
    reducers: {
        setShowAllGuides: (state, action) => {
            state.showAllGuides = action.payload;
        },
    },
});

export const { setShowAllGuides } = displaySlice.actions;
export default displaySlice.reducer;