import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axiosInstance from '../context/axiosConfig';
import WhatsAppButton from "../components/WhatsAppButton";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const { data } = await axiosInstance.post('/user/login', { email, password });
      localStorage.setItem('token', data.token);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
    <Container maxWidth="xs" sx={{ height: '80vh', padding: "5rem 0" }}>
      <Typography variant="h5">Login</Typography>
      <TextField
        label="Email"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        margin="normal"
      />
      <Button onClick={handleLogin} variant="contained" color="primary" fullWidth>
        Login
      </Button>
    </Container>
    <WhatsAppButton/>
    </>
  );
};

export default Login;
