import axios from 'axios';

export const getUserInfo = async () => {
  try {
   /*  const token = localStorage.getItem('token');
    if (!token) return null; */

    // Supondo que você tenha um endpoint '/api/user-info' que retorna as informações do usuário
    const response = await axios.get('http://localhost:3002/user/userId', {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjBmZmVjZDVlZTM3NTJlZDA3MjQxYmUiLCJpYXQiOjE3MTIzMzI4NTd9.73fYt4qOJjMZGbhcUTDU8R9XVdsMILXSPpcUUYG6iFw`,
      },
    });

    console.log(response.data)

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar informações do usuário:', error);
    return null;
  }
};