import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [], // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const { name, image, cost } = product;
            const existingItem = state.items.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({ name, image, cost, quantity: 1 });
            }
        },

        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.name !== action.payload);
        },

        updateQuantity: (state, action) => {
            const { name, quantity } = action.payload;
            const itemToUpdate = state.items.find(item => item.name === name);
            if (itemToUpdate) {
                itemToUpdate.quantity = quantity;
            }

        },

        incrementQuantity: (state, action) => {
            const itemName = action.payload
            const item = state.items.find(item => item.name === itemName)
            if (item) {
                item.quantity++;
            }
        },

        decrementQuantity: (state, action) => {
            const itemName = action.payload
            const item = state.items.find(item => item.name === itemName)
            if (item && item.quantity > 1) {
                item.quantity--;
            }
        },
    },
});

export const { addItem, removeItem, updateQuantity, decrementQuantity, incrementQuantity } = CartSlice.actions;

export default CartSlice.reducer;
