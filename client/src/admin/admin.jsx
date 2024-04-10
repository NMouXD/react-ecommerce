import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

function ProductForm() {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    brand: '',
    price: '',
    volume: '',
    file: null
  });
  const [previewImage, setPreviewImage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setProductData((prev) => ({ ...prev, file: files[0] }));
      setPreviewImage(URL.createObjectURL(files[0]));
    } else {
      setProductData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productData.name);
    formData.append('description', productData.description);
    formData.append('price', productData.price);
    formData.append('volume', productData.volume);
    formData.append('brand', productData.brand);
    if (productData.file) formData.append('file', productData.file);

    try {
      await axios.post('http://localhost:3002/admin/productsCreate', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Produto cadastrado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
      alert('Erro ao cadastrar produto.');
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '90%', 
        margin: '5rem auto',
      }}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Cadastrar Produto
      </Typography>
      <TextField
        label="Nome"
        name="name"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        value={productData.name}
        onChange={handleChange}
      />
      <TextField
        label="Descrição"
        name="description"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        value={productData.description}
        onChange={handleChange}
      />
      <TextField
        label="Marca"
        name="brand"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        value={productData.brand}
        onChange={handleChange}
      />
      <TextField
        label="Preço"
        name="price"
        type="number"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        value={productData.price}
        onChange={handleChange}
      />
      <TextField
        label="Volume"
        name="volume"
        variant="outlined"
        sx={{ mb: 2, width: '100%' }}
        value={productData.volume}
        onChange={handleChange}
      />
       {previewImage && <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100px' }} />}
      <Button
        variant="contained"
        component="label"
        sx={{ mb: 2 }}
      >
        Upload Imagem
        <input
          type="file"
          hidden
          onChange={handleChange}
        />
      </Button>
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </Box>
  );
}

export default ProductForm;