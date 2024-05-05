import Produto from "../models/products.model.js";

// Adicionar um novo produto
export const adicionarProduto = async (req, res) => {
  try {
    const { nome, descricao, preco, categoria, off, offPix, descricaoTitle, descricaoText, caracteristicasTitle, caracteristicasText, instrucaoTitle, instrucaoText } = req.body;
    const file = req.file;
    const novoProduto = new Produto({ nome, descricao, preco, categoria, off, offPix, imagensUrl: file.path, descricaoTitle, descricaoText, caracteristicasTitle, caracteristicasText, instrucaoTitle, instrucaoText });
    const produtoSalvo = await novoProduto.save();
    res.status(201).json(produtoSalvo);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao adicionar produto', error });
  }
};

// Obter todos os produtos
export const obterProdutos = async (req, res) => {
  try {
    const produtos = await Produto.find();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter produtos', error });
  }
};

// Obter um produto pelo ID
export const obterProdutoPorId = async (req, res) => {
  try {
    const produto = await Produto.findById(req.params.id);
    if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado' });
    res.json(produto);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter produto', error });
  }
};

// Atualizar um produto
export const atualizarProduto = async (req, res) => {
  try {
    const produtoAtualizado = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!produtoAtualizado) return res.status(404).json({ mensagem: 'Produto não encontrado' });
    res.json(produtoAtualizado);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao atualizar produto', error });
  }
};

// Deletar um produto
export const deletarProduto = async (req, res) => {
  try {
    const produtoDeletado = await Produto.findByIdAndDelete(req.params.id);
    if (!produtoDeletado) return res.status(404).json({ mensagem: 'Produto não encontrado' });
    res.json({ mensagem: 'Produto deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao deletar produto', error });
  }
};

export const buscarBestSellers = async (req, res) => {
  try {
    const produtos = await Produto.find().sort({ bestSellers: 1 }).exec();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};