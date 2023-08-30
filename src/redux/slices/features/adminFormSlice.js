// multiModalSlice.js (Redux Toolkit slice)

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentStep: 1,
    formData: {

        selectedOptions: [],

    },
};

const adminFormSlice = createSlice({
    name: 'adminForm',
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        setFormData: (state, action) => {
            state.formData = {
                ...state.formData, // Preserve existing form data
                ...action.payload, // Merge new form data
                selectedOptions: action.payload.selectedOptions, // Update selectedOptions
            };
        },
        resetFormState: (state) => {
            state.currentStep = 1;
            state.formData = {
                selectedOptions: [], // Reset selectedOptions array
                // ... reset other form data
            };
        },
    },
});

export const { setCurrentStep, setFormData, resetFormState } = adminFormSlice.actions;

export default adminFormSlice.reducer;
