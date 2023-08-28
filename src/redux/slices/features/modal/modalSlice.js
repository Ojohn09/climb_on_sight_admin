import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isOpen: false,
        isSettingsOpen: false,
        isNotificationOpen: false,
        isProfileOpen: false,
    },
    reducers: {
        openModal: (state) => {
            state.isOpen = true
        },
        closeModal: (state) => {
            state.isOpen = false
        },
        toggleSettings: (state) => {
            state.isSettingsOpen = !state.isSettingsOpen
        },
        toggleNotification: (state) => {
            state.isNotificationOpen = !state.isNotificationOpen
        },
        toggleProfile: (state) => {
            state.isProfileOpen = !state.isProfileOpen
        },


    },
})

export const { openModal, closeModal } = modalSlice.actions

export default modalSlice.reducer;