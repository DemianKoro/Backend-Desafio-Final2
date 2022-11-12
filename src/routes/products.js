const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares')
const {
  getProducts,
  createProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require('../controller/product.controller');


router.get('/', getProducts);
router.get('/:id', getProductById);

router.post('/', authMiddleware, createProduct);

router.put('/:id', authMiddleware, updateProductById);

router.delete('/:id', authMiddleware, deleteProductById);

module.exports = router;
