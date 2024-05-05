import express from 'express';
import { deletarProduto, atualizarProduto, adicionarProduto, obterProdutos, obterProdutoPorId, buscarBestSellers } from '../controllers/products.controller.js';
import upload from '../config/multer.js';
import { adicionarVariacao, atualizarVariacao, deletarVariacao } from "../controllers/variacoes.controller.js"
const router = express.Router();

router.post('/productsCreate', upload.single("file"), adicionarProduto);
router.get('/productsListen', obterProdutos);
router.get('/productsId/:id', obterProdutoPorId);
router.put('/productsUpdate/:id', upload.single("file"), atualizarProduto);
router.delete('/productsDelete/:id', deletarProduto);
router.get('/getBestSellers', buscarBestSellers)

// Adicionar uma variação a um produto específico
router.post('/produtos/:produtoId/variacoes', upload.single("file"), adicionarVariacao);
// Atualizar uma variação específica de um produto
router.put('/produtos/:produtoId/update/:variacaoId', upload.single("file"), atualizarVariacao);
// Deletar uma variação específica de um produto
router.delete('/produtos/:produtoId/delete/:variacaoId', deletarVariacao);



export default router;