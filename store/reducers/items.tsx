import type { AppState, AppThunk } from '../../store'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {}


export const counterSlice = createSlice({
    name: 'Items',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // addItem: (state, action: PayloadAction<string>) => {

        //     state.items= state.items.concat({
        //         id: `${Math.random()}`,
        //         name: action.payload,
        //         image: 'https://storage.googleapis.com/web_don/laraluxury/public/image/products/Screenshot%202022-03-16%20at%201.11.16%20PM.png',
        //         amount: '₦ 38,200.00'
        //     })
        // },
        // deleteItem: (state) => {
        //     state = {
        //         ...state,
        //         items: state.items.filter((item) => {
        //             return item.key !== state.seletedItem.key;
        //         }),
        //         seletedItem: null
        //     }
        // },
        // Use the PayloadAction type to declare the contents of `action.payload`
        // seleteItem: (state, action: PayloadAction<string>) => {
        //     state = {
        //         ...state,
        //         seletedItem: state.items.find(item => {
        //             return item.key === action.payload;
        //         })
        //     }

        // },
        // deseleteItem: (state) => {
        //     state = {
        //         ...state,
        //         seletedItem: null
        //     }
        // },
    },

})

// export const { addItem } = counterSlice.actions

// export const getItems = (state: AppState) => state.items.items;
// export const getSeletedItem = (state: AppState) => state.items.seletedItem;

export default counterSlice.reducer