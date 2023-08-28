import { createSlice } from "@reduxjs/toolkit";

const modalSlice2 = createSlice({
    name: 'modal2',
    initialState: {
        isOpen: false,
        isNoticeOpen: false,
        isProfileOpen: false,
    },
    reducers: {
        openModal2: (state) => {
            state.isOpen = true
        },
        closeModal2: (state) => {
            state.isOpen = false
        },
    },
})

export const { openModal2, closeModal2 } = modalSlice2.actions

export default modalSlice2.reducer;