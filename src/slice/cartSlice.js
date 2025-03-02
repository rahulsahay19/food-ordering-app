import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], // Stores cart items
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity
                console.log(`Updated quantity for ${existingItem.name}:`, existingItem.quantity); // Log Quantity Update
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); //  New item with quantity = 1
                console.log(`Added new item: ${action.payload.name}, Quantity: 1`); // Log New Item
            }
        },
        removeFromCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload);
            if (existingItem) {
                if (existingItem.quantity > 1) {
                    existingItem.quantity -= 1; // Reduce quantity instead of removing
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload);
                }
            }
        },
        clearCart: (state) => {
            state.items = []; // Clearing all items
        }
    }
});

// Export the actions
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
