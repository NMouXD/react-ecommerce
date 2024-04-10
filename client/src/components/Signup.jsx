import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import axios from 'axios';

const Signup = () => {
  const [user, setUser] = useState({
    name: '',
    lastname: '',
    street: '',
    city: '',
    state: '',
    cep: '',
    phone: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:3002/user/register', user);
      // Handle success (e.g., show message, redirect to login)
    } catch (error) {
      console.error('Signup failed:', error);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ height: '100vh', padding: "5rem 0" }}>
      <Typography variant="h5">Sign Up</Typography>
      {/* Create TextField for each field like the example below */}
      <TextField
        label="Name"
        name="name"
        fullWidth
        value={user.name}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Lastname"
        name="lastname"
        fullWidth
        value={user.lastname}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Street"
        name="street"
        fullWidth
        value={user.street}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="City"
        name="city"
        fullWidth
        value={user.city}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="State"
        name="state"
        fullWidth
        value={user.state}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Cep"
        name="cep"
        fullWidth
        value={user.cep}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Phone"
        name="phone"
        fullWidth
        value={user.phone}
        onChange={handleChange}
        margin="normal"
      />
      <TextField
        label="Email"
        name="email"
        fullWidth
        value={user.email}
        onChange={handleChange}
        margin="normal"
        type="email"
      />
      <TextField
        label="Password"
        name="password"
        fullWidth
        value={user.password}
        onChange={handleChange}
        margin="normal"
        type="password"
      />
      {/* Repeat TextField components for other fields */}
      <Button onClick={handleSignup} variant="contained" color="primary" fullWidth>
        Sign Up
      </Button>
    </Container>
  );
};

export default Signup;
