import asyncHandler from '../middleWare/asyncHandler.js'
import express from 'express'
const router = express.Router()

import Product from '../models/productModel.js'


// GET ALL PRODUCTS 
router.get('/', asyncHandler(async (req, res) => {
   const products = await Product.find({})
   res.json(products)
}))


// GET SINGLE PRODUCT
router.get('/:id', asyncHandler(async (req, res) => {

   const product = await Product.findById(req.params.id)

   // if found 
   if (product) {
      return res.json(product)
   }

   // if not found
   res.status(404).json({ message: 'Product not found' }
   )
}));



export default router;