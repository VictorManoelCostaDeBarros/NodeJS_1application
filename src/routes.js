const express = require('express')
const routes = express.Router()

const ProdcutController = require('./controllers/ProductController')
const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.index)
routes.get('/products/:id', ProductController.show)
routes.post("/products", ProdcutController.store)
routes.put("/products/:id", ProdcutController.update)
routes.delete("/products/:id", ProdcutController.destroy)



module.exports = routes