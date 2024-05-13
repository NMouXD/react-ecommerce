import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  user: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload._id);
    },

    addCount: (state, action) => {
      
      state.cart = state.cart.map((item) => {
        if (item.selectedVariation._id === action.payload._id) {
          item.count = item.count + action.payload.count;
        }
        return item;
      });
    },

    increaseCount: (state, action) => {
      
      state.cart = state.cart.map((item) => {
        if (item.selectedVariation._id === action.payload._id) {
          item.count++;
        }
        return item;
      });
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item._id === action.payload._id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
  setUser,
  addCount,
} = cartSlice.actions;

export default cartSlice.reducer;
