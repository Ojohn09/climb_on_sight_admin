import { createSlice } from '@reduxjs/toolkit';

const eventSlice = createSlice({
    name: 'event',
    initialState: {
        selectedEvent: null,
        climbersEvent: null,
        isModalVisible: false,
        clickedEvent: null,
    },
    reducers: {
        selectEvent: (state, action) => {
            state.selectedEvent = action.payload;
        },
        selectEvent1: (state, action) => {
            state.climbersEvent = action.payload;
        },
        toggleModal: (state) => {
            state.isModalVisible = !state.isModalVisible;
        },
        setClickedEvent: (state, action) => {
            state.clickedEvent = action.payload;
        },
    },
});

export const { selectEvent, selectEvent1, toggleModal, setClickedEvent } = eventSlice.actions;
export default eventSlice.reducer;
