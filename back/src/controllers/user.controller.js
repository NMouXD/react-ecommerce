import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Criar usuário
export async function createUser(req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({ ...req.body, password: hashedPassword });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Obter todos os usuários
export async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Função de login
export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Email ou senha inválidos' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Função para atualizar um usuário
export async function updateUser(req, res) {
    const { userId } = req.params;
    const { name, lastname, street, city, state, cep, phone, email, password } = req.body;
  
    let updatedData = { name, lastname, street, city, state, cep, phone, email };
  
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }
  
    try {
      const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true }).select('-password');
      if (!updatedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  
  // Função para deletar um usuário
export async function deleteUser(req, res) {
    const { userId } = req.params;
  
    try {
      const deletedUser = await User.findByIdAndDelete(userId);
      if (!deletedUser) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      res.status(204).send(); // No Content
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  //função de pegar o usuario pelo token

  export const getUserById = async (req, res) => {
    try {
      const userId = req.user.userId; // Ou req.params.userId, dependendo de como você definir a rota
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).send({ message: 'Usuário não encontrado.' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
  