import { createSlice } from '@reduxjs/toolkit';

// Middleware para salvar o estado do cart no localStorage
export const localStorageMiddleware = store => next => action => {
  const result = next(action);
  if (action.type.startsWith('cart/')) {
    const cartState = store.getState().cart;
    localStorage.setItem('cart', JSON.stringify(cartState.cart));
  }
  return result;
};

// Recuperar o estado inicial do cart do localStorage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const initialState = {
  isCartOpen: false,
  cart: loadCartFromLocalStorage(),
  items: [],
  user: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addToCart: (state, action) => {
         const itemIndex = state.cart.findIndex(item => item.selectedVariation._id === action.payload.item.selectedVariation._id);
         if (itemIndex >= 0) {
          state.cart[itemIndex].count += action.payload.item.count;
         } else {
          state.cart.push(action.payload.item);
         }
        },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.selectedVariation._id !== action.payload._id);
    },
    increaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.selectedVariation._id === action.payload._id) {
          item.count++;
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cart = state.cart.map(item => {
        if (item.selectedVariation._id === action.payload._id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: state => {
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
} = cartSlice.actions;

export default cartSlice.reducer;