import mongoose from "mongoose";
const Schema = mongoose.Schema;

const variacaoSchema = new Schema({
  nome: { type: String, required: true },
  imagemUrl: { type: String, required: true },
  volume: {
    type: Number,
    required: true
  },
});

const descricaoSchema = new Schema({
  
});

const produtoSchema = new Schema({
  nome: { type: String, required: true },
  descricaoTitle : { type: String, required: true },
  descricaoText : { type: String, required: true },
  caracteristicasTitle : {type: String, required: true},
  caracteristicasText : {type: String, required: true},
  instrucaoTitle : { type: String, required: true},
  instrucaoText : { type: String, required: true},
  preco: { type: Number, required: true },
  imagensUrl: [String],  
  variacoes: [variacaoSchema],  // Variações como cores ou sabores
  categoria: { type: String, required: true },
  bestSellers: { type: Number, default: 0 },
  off: { type: Number, required: true},
  offPix:{type: Number, required: true}
});

const Produto = mongoose.model('Produto', produtoSchema);

export default Produto