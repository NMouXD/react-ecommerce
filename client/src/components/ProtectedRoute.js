import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getUserInfo } from '../services/userService';

export const ProtectedRoute = ({ children }) => {
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await getUserInfo();
      if (userInfo && userInfo.role) {
        setUserRole(userInfo.role);
      }
      setIsLoading(false);
    };

    fetchUserInfo();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>; // Ou qualquer componente de loading que você preferir
  }

  if (userRole !== 'admin') {
    return <Navigate to="/" />;
  }

  return children;
};