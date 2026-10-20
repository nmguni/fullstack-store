import dotenv from 'dotenv/config'
import express from 'express'
import products from './data/products.js';

const port = process.PORT || 8080;


const app = express();

app.get('/', (req, res) => {
   res.send('API running.....')
})

// all products
app.get('/api/products', (req, res) => {
   res.json(products)
})


// Single product
app.get('/api/products/:id', (req, res) => {
   const product = products.find((p) => p._id === req.params.id)
   res.json(product)
})


app.listen(port, () => {
   console.log(`Server running on port: ${PORT} (^.^)`);
})