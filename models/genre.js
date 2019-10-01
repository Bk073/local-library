'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GenreSchema = new Schema({
    name: {type: String, required: true}
});

GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

var genre = mongoose.model('Genre', GenreSchema);
module.exports = genre;
