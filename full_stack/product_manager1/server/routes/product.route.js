const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api/product', ProductController.findAllProducts);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.post('/api/product', ProductController.createProduct);     
}

