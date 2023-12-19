const Product = require('../models/product.model');    

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allDaProducts) => {
            res.json(allDaProducts)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({_id:req.params.id})
    .then((oneproduct) => {
        res.json(oneproduct)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });

}

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err));
}


module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.json(err))
}
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}





