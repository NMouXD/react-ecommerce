import express from 'express';
import productController from '../controllers/products.controller.js';
import upload from '../config/multer.js';
import { updateProductImage } from '../controllers/image.controller.js';
const router = express.Router();

router.post('/productsCreate', upload.single("file"), productController.createProduct);
router.get('/productsListen', productController.getAllProducts);
router.get('/productsId/:id', productController.getProductById);
router.put('/productsUpdate/:id', upload.single("file"), productController.updateProduct);
router.delete('/productsDelete/:id', productController.deleteProduct);
router.put('/productsUpdateImage/:id', upload.single("file"), updateProductImage);
router.get('/bestSellers', productController.getBestSellers);


export default router;