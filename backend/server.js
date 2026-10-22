import express from 'express'
import dotenv from 'dotenv'
dotenv.config();
import products from './data/products.js';
const port = process.env.PORT || 8080


import connectDB from './config/db.js';
connectDB()

const app = express();

app.get('/', (req, res) => {
   res.send('API running.....')
})

// all products - 
app.get('/api/products', (req, res) => {
   res.json(products)

   console.log(products)
})


// Single product
app.get('/api/products/:id', (req, res) => {
   const product = products.find((p) => p._id === req.params.id)
   res.json(product)
})


app.listen(port, () => {
   console.log(`Server running on port: ${port} (^.^)`);
})