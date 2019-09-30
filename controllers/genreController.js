'use strict';
const Genre = new  require('../models/genre');

module.exports = {
    genre_list: function (req, res) {
        res.send('Not implemented');
    },
    genre_get: function (req, res) {
        res.render('catalog/createGenre');
    },
    genre_post: function (req, res) {
        const genre = new Genre({
            name : req.body.name
        });
        genre.save(function (err) {
            if (err) return err;
            else{
                res.redirect('catalog/genre');
            }
        })
    },
    genre_delete_get: function (req, res) {
        res.send('Not implemented');
    },
    genre_delete_post: function (req, res) {
        res.send('Not implemented');
    },
    genre_update_get: function (req, res) {
        res.send('Not implemented');
    },
    genre_update_post: function (req, res) {
        res.send('Not implemented');
    }
};