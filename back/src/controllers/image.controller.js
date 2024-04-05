import fs from 'fs';
import Product from '../models/products.model.js';

export const updateProductImage = async (req, res) => {
  try {
    const { id } = req.params;

  const product  = await Product.findById(id);

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  const oldImagePath = product.image;

    // Atualiza o produto com o novo caminho da imagem, se fornecida
    if (req.file) {
      product.image = req.file.path; // Adiciona o novo caminho da imagem ao produto
      await product.save(); // Salva as alterações no banco de dados
    } else {
      return res.status(400).json({ message: 'Nenhum arquivo de imagem fornecido.' });
    }

    // Se uma nova imagem foi fornecida, deletar a imagem antiga
    if (oldImagePath && fs.existsSync(oldImagePath)) {
      fs.unlink(oldImagePath, (err) => {
        if (err) {
          console.error('Erro ao deletar a imagem antiga:', err);
          // Considerar adicionar uma resposta ao cliente aqui pode não ser ideal, já que a operação principal (atualizar a imagem do produto) foi bem-sucedida.
          // Uma abordagem pode ser registrar o erro para que possa ser analisado posteriormente.
        } else {
          console.log('Imagem antiga deletada com sucesso.');
        }
      });
    }

    res.status(200).json({ message: 'Imagem do produto atualizada com sucesso.', product })
  } catch (error) {
    res.status(400).json({error})
  }

};

