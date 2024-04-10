import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

export const ProtectedRoute = ({ children }) => {
  const [userRole, setUserRole] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = useSelector((state) => state.cart.user);
  console.log(userInfo)
  useEffect(() => {
    const fetchUserInfo = async () => {
      
  
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