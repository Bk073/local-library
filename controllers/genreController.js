'use strict';
const Genre = require('../models/genre');

module.exports = {
    genre_list: function (req, res) {
        Genre.find({}, function (err, genre) {
            if (err){return err;}
            // console.log(genre);
            res.render('catalog/listGenre', {genre:genre});
        })
    },
    genre_get: function (req, res) {
        res.render('catalog/createGenre');
    },
    genre_post: function (req, res) {
        const genre = new Genre(
            { name: req.body.name }
        );
        genre.save(function (err) {
            if (err) { return (err); }
            // Genre saved. Re  direct to genre detail page.
            res.redirect('/catalog/genre/list');   //Redirects can be relative to the root of the host name.
        //    this will redirect to localhost:3000/catalog/genre/list

            //    res.redirect('catalog/genre/list'); this is relative to current url
        //    if current stater is localhost:3000/catalog/genre/create this will redirect to :
        //    localhost:3000/catalog/genre/catalog/genre/list
        });
    },
    // genre_delete_get: function (req, res) {
    //     const genre = Genre.findById(req.params.id);
    //     genre.exec(function (err, genre) {
    //         if (err){
    //             return (err);
    //         }else{
    //             res.render('catalog/deleteGenre', {genre:genre});
    //         }
    //     })
    // },
    genre_delete_get: function (req, res) {
        // console.log(req.params.id);
        Genre.findByIdAndRemove({_id:req.params.id}, function (err) {
            if (err){
                return (err);
            }else{
                res.redirect('/catalog/genre/list');
            }
        });
    },
    genre_update_get: function (req, res) {
        res.send('Not implemented');
    },
    genre_update_post: function (req, res) {
        res.send('Not implemented');
    }
};