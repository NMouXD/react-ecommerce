import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const itemCarrinhoSchema = new mongoose.Schema({
  produtoId: mongoose.Schema.Types.ObjectId,
  quantidade: Number,
  preco: Number
}, { timestamps: true });

const userSchema = new Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  cep: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false }, // Não retorna em consultas
  role: {type: String, default: 'client'},
  authEmail: Boolean,
  carrinho: [itemCarrinhoSchema],
  carrinhoAbandonadoEm: Date
}, { timestamps: true });

const User = model('User', userSchema);

export default User;