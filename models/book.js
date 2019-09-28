const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
   title: {
       type: String,
       required: true
   },
    summary: {
       type: String
    },
    isbn: {
       type: String,
       required: true
    },
    author: {
        type: Schema.Types.ObjectID, ref: 'Author', required: true
    },
    genre: [{
        type: Schema.Types.ObjectID, ref: 'Genre', required: true
    }]
});

BookSchema
    .virtual('url')
    .get(function () {
        return '/catalog/book'+this._id;
    });

// var Book = mongoose.model('BookModel', BookSchema);

module.exports = mongoose.model('Book', BookSchema);