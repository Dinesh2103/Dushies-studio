import express from 'express';
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  // checkID,
  // checkBody,
} from '../controllers/productController.js';

const router = express.Router();

// router.param('id', checkID); // middelware that checks for the ID in get request with ID QP

router.route('/').get(getAllProducts).post(/*checkBody,*/ createProduct);
router
  .route('/:id')
  .get(getProductById)
  .patch(updateProduct)
  .delete(deleteProduct);

export default router;
