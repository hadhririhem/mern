const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    
    app.get('/api/author', AuthorController.findAllAuthors);
    app.get('/api/author/:id', AuthorControllerController.findOneAuthor);
    app.post('/api/author', AuthorController.createProduct); 
    app.patch('/api/edit/:id', ProductController.updateProduct); 
    app.delete('/api/product/:id', ProductController.deleteProduct); 


}

