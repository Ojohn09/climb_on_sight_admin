import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'
import authReducer from '../slices/auth/loginSlice'
import modalReducer from '../slices/features/modal/modalSlice'
import calendarReducer from '../slices/features/calendarSlice'
import eventReducer from '../slices/features/eventSlice'
import activeTabReducer from '../slices/features/activeTabSlice'
import displayReducer from '../slices/features/displaySlice'
import multiModalReducer from '../slices/features/multiModalSlice'
import adminFormReducer from '../slices/features/adminFormSlice'



const store = configureStore({
    reducer: {
        signUp: signUpFormReducer,
        auth: authReducer,
        modal: modalReducer,
        calendar: calendarReducer,
        event: eventReducer,
        activeTab: activeTabReducer,
        display: displayReducer,
        multiModal: multiModalReducer,
        adminForm: adminFormReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})



export default store