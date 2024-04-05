import Product from "../models/products.model.js";

const productController = {
    // Criar um novo Produto
    createProduct: async (req, res) => {
        try {

            const {name, description, price, volume, brand} = req.body
            const file = req.file

            /* if(!name || !description || !price || !volume || !image){
                return res.status(400).json({"message": "preencha todos os campos"})
            } */

            const product = new Product({name, description, price, volume, brand, image: file.path});

            await product.save();

            res.status(201).json(product);

        } catch (error) {
            res.status(400).json(error);
        }
    },

    // Ler todos os Produtos
    getAllProducts: async (req, res) => {
        try {
            const products = await Product.find({});
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Ler um Produto pelo ID
    getProductById: async (req, res) => {
        try {
            const product = await Product.findById(req.params.id);
            if (!product) {
                return res.status(404).json();
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // Atualizar um Produto pelo ID
    updateProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
            if (!product) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(400).json(error);
        }
    },

    // Deletar um Produto pelo ID
    deleteProduct: async (req, res) => {
        try {
            const product = await Product.findByIdAndDelete(req.params.id);
            if (!product) {
                return res.status(404).json();
            }
            res.status(200).json(product);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getBestSellers: async (req, res) => {
        try {
          // Busca os produtos e ordena pelo campo 'bestSellers' em ordem decrescente
          const products = await Product.find().sort({ bestSellers: -1 });
          res.json(products);
        } catch (error) {
          console.error('Erro ao buscar os produtos mais vendidos:', error);
          res.status(500).send('Erro ao buscar os produtos mais vendidos');
        }
      }
};

export default productController