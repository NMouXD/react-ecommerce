import express from 'express';
import { createUser, deleteUser, /* getAllUsers, */ getUserById, loginUser, updateUser } from '../controllers/user.controller.js';
import authenticateToken from '../middlewares/auth.middleware.js';

const router = express.Router();

router.post('/register', createUser);/* 
router.get('/users', getAllUsers); */
router.post('/login', loginUser);
router.put('/updateUsers/:userId',authenticateToken, updateUser); // Rota para atualizar um usuário
router.delete('/deleteUsers/:userId',authenticateToken, deleteUser); // Rota para deletar um usuário
router.get('/userId',authenticateToken, getUserById);

export default router;