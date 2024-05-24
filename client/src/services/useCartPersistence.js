import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState = { /* ... (seu estado inicial) */ };

export const cartSlice = createSlice({
  // ... (seus reducers)
});

export const { /* ... (suas actions) */ } = cartSlice.actions;

export default cartSlice.reducer;

// Hook para carregar do LocalStorage e salvar alterações
export function useCartPersistence() {
  const cart = useSelector((state) => state.cart.cart); // Acessa o carrinho do state
  const dispatch = useDispatch();

  useEffect(() => {
    // Carrega o carrinho do LocalStorage ao iniciar
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    dispatch(addToCart({ item: storedCart })); // Carrega o carrinho

    // Listener para salvar no LocalStorage sempre que o carrinho mudar
    const unsubscribe = store.subscribe(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    });

    return unsubscribe; // Limpa o listener ao desmontar o componente
  }, [cart, dispatch]); // Executa apenas uma vez ao montar e quando o carrinho mudar
}
