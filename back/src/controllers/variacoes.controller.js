import Produto from "../models/products.model.js";


// Adicionar variação a um produto
export const adicionarVariacao = async (req, res) => {
    try {

        const {nome, volume} = req.body
        const file = req.file.path
        console.log(file)
      const produto = await Produto.findById(req.params.produtoId);
      if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado' });
  
      produto.variacoes.push({nome, volume, imagemUrl: file });
      const produtoAtualizado = await produto.save();
      res.status(201).json(produtoAtualizado);
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro ao adicionar variação', error });
    }
  };
  
  // Atualizar variação
  export const atualizarVariacao = async (req, res) => {
    try {
        const {nome, volume} = req.body
        const file = req.file
      const produto = await Produto.findById(req.params.produtoId);
      if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado' });
  
      const variacao = produto.variacoes.id(req.params.variacaoId);
      if (!variacao) return res.status(404).json({ mensagem: 'Variação não encontrada' });
  
      variacao.set({nome, volume, imagemUrl: file });
      await produto.save();
      res.json(produto);
    } catch (error) {
      res.status(400).json({ mensagem: 'Erro ao atualizar variação', error });
    }
  };
  
  // Deletar variação
  export const deletarVariacao = async (req, res) => {
    try {
      const produto = await Produto.findById(req.params.produtoId);
      if (!produto) return res.status(404).json({ mensagem: 'Produto não encontrado' });
  
      produto.variacoes.id(req.params.variacaoId).remove();
      await produto.save();
      res.json({ mensagem: 'Variação deletada com sucesso' });
    } catch (error) {
      res.status(500).json({ mensagem: 'Erro ao deletar variação', error });
    }
  };
  