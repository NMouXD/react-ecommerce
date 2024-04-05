import mongoose  from "mongoose";


// Definindo o esquema do Produto
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  brand:{
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    required: true
  },
  bestSellers: {
    type: Number,
    default: 0,
  },
  image: {
    type: String, // URL da imagem ou caminho do arquivo
    required: false
  }
});

// Compilando o modelo a partir do esquema
const Product = mongoose.model('Product', productSchema);

// Exportando o modelo
export default Product;