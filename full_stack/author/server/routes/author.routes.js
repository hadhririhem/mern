const AuthorController = require('../controllers/author.controller');
module.exports = (app) => {
    
    app.get('/api/author', AuthorController.findAllAuthors);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.post('/api/author', AuthorController.createAuthor); 
    app.patch('/api/author/:id', AuthorController.updateAuthor); 
    app.delete('/api/author/:id', AuthorController.deleteAuthor); 

}
