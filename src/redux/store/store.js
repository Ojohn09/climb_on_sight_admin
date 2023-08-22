import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'
import authReducer from '../slices/auth/loginSlice'
import modalReducer from '../slices/features/modalSlice'
import calendarReducer from '../slices/features/calendarSlice'
import eventReducer from '../slices/features/eventSlice'
import activeTabReducer from '../slices/features/activeTabSlice'

const store = configureStore({
    reducer: {
        signUp: signUpFormReducer,
        auth: authReducer,
        modal: modalReducer,
        calendar: calendarReducer,
        event: eventReducer,
        activeTab: activeTabReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})



export default store