const Author = require('../models/author.model');    

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allDaAuthors) => {
            res.json(allDaAuthors)
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneAuthor = (req, res) => {
    Author.findOne({_id:req.params.id})
    .then((oneauthor) => {
        res.json(oneauthor)
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });

}

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
        .then((author) => res.json(author))
        .catch((err) => res.json(err));
}


module.exports.updateAuthor = (request, response) => {
    Author.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedAuthor => response.json(updatedAuthor))
        .catch(err => response.json(err))
}
module.exports.deleteAuthor = (request, response) => {
    Author.deleteOne({ _id: request.params.id }) 
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}