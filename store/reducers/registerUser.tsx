import type { AppState } from '../../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { type } from 'os'
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
// type chatData = [{
//     id : string
//     user_id : string
//     peer_user_id : string
//     message : string
//     status : string
//     created_at : string
// }]

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
    },
    chatData: [
        {
            id : "0",
            user_id : "1",
            peer_user_id : "1",
            message : "Hey i am Julia, a Medical Assistant! Please enter your symptoms",
            status : "send",
            created_at : new Date
        }
    ],
    message: '',
    userData :{
        id: "0",
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
        updateChatData: (state, action: PayloadAction<any>) => {
            state.chatData = action.payload
        },
        updateUserData: (state, action: PayloadAction<any>) => {
            state.userData = action.payload
        },
        updateMessage: (state, action: PayloadAction<string>) => {
            state.message = action.payload
        },

    },

})

export const { updateFormData, updateLoginData, updateChatData, updateMessage, updateUserData } = cartSlice.actions

export const getFormData = (state: AppState) => state.registerUser.formdData;

export const getLoginData = (state: AppState) => state.registerUser.loginData;

export const getChatData = (state: AppState) => state.registerUser.chatData;

export const getMessage = (state: AppState) => state.registerUser.message; 

export const getUser = (state: AppState) => state.registerUser.userData;

export default cartSlice.reducer