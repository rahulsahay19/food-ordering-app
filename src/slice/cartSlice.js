import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [], //stores cart items 
    },
    reducers: {
        addToCart: (state, action) =>{
            console.log("Add to Cart Dispatcher", action.payload);
            state.items.push(action.payload); //Add Itens to the cart
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item=> item.id !== action.payload);
        },
        clearCart: (state) =>{
            state.items = []; //Clearing all items
        }
    }
});

//Export the actions
export const {addToCart, removeFromCart, clearCart} = cartSlice.actions;
export default cartSlice.reducer;   