import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setUser } from '../state';

export const FetchUser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await axios.get('http://localhost:3002/user/userId', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          dispatch(setUser(response.data)); // Supondo que a resposta seja o usuário
        } catch (error) {
          console.error("Erro ao buscar informações do usuário:", error);
          // Lidar com erro, talvez limpando o token se for inválido
        }
      }
    };

    fetchUser();
  }, [dispatch]);

  return null; // Este componente não renderiza nada
};