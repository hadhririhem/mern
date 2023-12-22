const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    firstName :{
        type: String,
        required : [true, 'Field Required'], 
        minLength : [3, "First Name must be 3 charachters at least"]
    },
    lastName: { 
        type : String,
        required : [true, 'Field Required'],
        minLength : [3, "First Name must be 3 charachters at least"]
    },
}, { timestamps: true });

const Author = mongoose.model('Author', AuthorSchema);
module.exports = Author;