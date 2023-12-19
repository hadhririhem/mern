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

