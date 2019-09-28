const express = require('express');
const router = express.Router();

const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const book_instance_controller = require('../controllers/bookinstanceController');
const genre_controller = require('../controllers/genreController');

/// BOOK ROUTES ///

// router.get('/', book_controller.index);

/// AUTHOR ROUTES ///

router.get('/author/create', author_controller.author_create_get);
router.post('/author/create', author_controller.author_create_post);
router.get('/author/list', author_controller.author_list);
router.get('/author/delete', author_controller.author_delete_get);
router.post('/author/delete', author_controller.author_delete_post);


module.exports = router;