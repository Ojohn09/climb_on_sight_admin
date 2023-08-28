import { configureStore } from '@reduxjs/toolkit'
import signUpFormReducer from '../slices/auth/signUpFormSlice'
import authReducer from '../slices/auth/loginSlice'
import modalReducer from '../slices/features/modal/modalSlice'
import modalReducer2 from '../slices/features/modal/modalSlice2'
import modalReducer3 from '../slices/features/modal/modalSlice3'
import calendarReducer from '../slices/features/calendarSlice'
import eventReducer from '../slices/features/eventSlice'
import activeTabReducer from '../slices/features/activeTabSlice'
import displayReducer from '../slices/features/displaySlice'


const store = configureStore({
    reducer: {
        signUp: signUpFormReducer,
        auth: authReducer,
        modal: modalReducer,
        modal2: modalReducer2,
        modal3: modalReducer3,
        calendar: calendarReducer,
        event: eventReducer,
        activeTab: activeTabReducer,
        display: displayReducer,
    },

    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})



export default store