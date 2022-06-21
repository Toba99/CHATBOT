import type { AppState } from '../../store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
    item: {
        id: '',
        name: '',
        image: '',
        amount: '0',
        quantity: '',
        size: '',
        color: '',
    }
}

type selecteItem = {
    id: string,
    name: string,
    image: string,
    amount: string,
    quantity: string,
    size: string,
    color: string,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        addTocart: (state) => {
            state.cart = state.cart.concat({ ...state.item })
        },
        setItem: (state) => {

            state.cart = state.cart.concat({ ...state.item })
        },
        deleteFromCart: (state, action: PayloadAction<selecteItem>) => {
            state.item = action.payload
        },
        selectColor: (state, action: PayloadAction<string>) => {
            console.log(action.payload);

            state.item.color = action.payload
        },
        selectSize: (state, action: PayloadAction<string>) => {
            state.item.size = action.payload
        },
        selectQuantity: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            
            state.item.quantity = action.payload
        },
        selecteItem: (state, action: PayloadAction<selecteItem>) => {
            state.item = action.payload
        }

    },

})

export const { addTocart, deleteFromCart, selectColor, selectSize, selecteItem, selectQuantity, setItem } = cartSlice.actions

export const getCart = (state: AppState) => state.cart.cart;
export const getSize = (state: AppState) => state.cart.item.size;
export const getColor = (state: AppState) => state.cart.item.color;
export const getQuantity = (state: AppState) => state.cart.item.quantity;
export const getItem = (state: AppState) => state.cart.item;

export default cartSlice.reducer