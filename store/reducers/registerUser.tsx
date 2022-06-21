import type { AppState } from '../../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
type formData = {
    firstName: string
    lastName: string
    email: string
    password: string
}
type loginData = {
    email: string
    password: string
}
const initialState = {
    formdData: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    },
    loginData: {
        email: '',
        password: ''
    }

}


export const cartSlice = createSlice({
    name: 'registerUser',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        updateFormData: (state, action: PayloadAction<formData>) => {
            state.formdData = action.payload
        },
        updateLoginData: (state, action: PayloadAction<loginData>) => {
            state.loginData = action.payload
        },

    },

})

export const { updateFormData, updateLoginData } = cartSlice.actions

export const getFormData = (state: AppState) => state.registerUser.formdData;

export const getLoginData = (state: AppState) => state.registerUser.loginData;

export default cartSlice.reducer