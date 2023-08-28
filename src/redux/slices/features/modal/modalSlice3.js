import { createSlice } from "@reduxjs/toolkit";

const modalSlice3 = createSlice({
    name: 'modal3',
    initialState: {
        isOpen: false,
        isNoticeOpen: false,
        isProfileOpen: false,
    },
    reducers: {
        openModal3: (state) => {
            state.isOpen = true
        },
        closeModal3: (state) => {
            state.isOpen = false
        },
    },
})

export const { openModal3, closeModal3 } = modalSlice3.actions

export default modalSlice3.reducer;