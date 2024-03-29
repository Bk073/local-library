const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    first_name: {type: String, required: true},
    family_name: {type: String, required: true},
    date_of_birth: {type: Date},
    date_of_death: {type: Date},
    lifespan: {type: Number},
});

AuthorSchema
    .virtual('name')
    .get(function () {
        return this.first_name + this.family_name;
    });

AuthorSchema
    .virtual('url')
    .get(function () {
        return '/catalog/author' + this._id;
    });

module.exports = mongoose.model('Author', AuthorSchema);