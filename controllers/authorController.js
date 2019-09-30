const Author = new require('../models/author.js').Author;

module.exports = {
    author_list : function (req, res, next) {
        // Author.find(function (err, list) {
        //     if(err){
        //         return err;
        //     }else{
        //         res.render('catalog/authorList', {list:list});
        //     }
        // });
        Author.find({}, function (err, list){
            if (err){
                return err;
            }else{
                res.render('catalog/authorList', {authorlist:list});
            }
        });

        // Author.find()
        //     .sort([['family_name', 'ascending']])
        //     .exec(function (err, list_authors) {
        //         if (err) { return next(err); }
        //         // Successful, so render.
        //         res.render('catalog/authorList', { title: 'Author List', authorlist: list_authors });
        //     })
    },
    author_detail: function (req, res) {
        res.send('Not implemented');
    },
    author_create_get: function (req, res) {
        res.render('catalog/createAuthor');
    },
    author_create_post: function (req, res) {
        const author = new Author(
            {
            first_name: req.first_name,
            family_name: req.family_name,
            date_of_birth: req.date_of_birth,
            date_of_death: req.date_of_death,
            }
            );
        author.save(function (err) {
            if(err){
                return err;
            }else{
                res.render('catalog/createAuthor')
            }
        })
    },
    author_delete_get: function (req, res) {
        res.render('catalog/deleteAuthor');
       // name = req.first_name
       // Author.deleteOne({name:''})
    },
    author_delete_post: function (req, res) {
        // console.log(req.body);
        first_name = req.body.first_name;
        console.log(first_name);
        Author.deleteOne({first_name:'first_name'}, function (err) {});
        res.send('Deleted');
    },
    author_update_get: function (req, res) {
        res.send('Not implemented');
    },
    author_update_post: function (req, res) {
        res.send('Not implemented');
    }
};

/*background-color: #e6e6ff;*/
/*color:#856514;*/
/*background-color:  #ffffcc;*/
/*color:#00AA00;*/
// background-color:  #00e600;
// color: #5A781D;
/*background-color:#a5dba5;*/
/*color: #2A2400;*/



// A mongoose query can be executed in one of two ways. 1. callback 2. query.exec

// Understand callback -> http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

//  1. callback(Higher-order function) -> passing function as argument (like inline function, or lambda function in python)
//  When executing a query with a callback function, you specify your query as a JSON document.
//  The JSON document's syntax is the same as the MongoDB shell.

// Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {});

// 2. query.exec -> also uses callback just chaining is allowed

//  A Query enables you to build up a query using chaining syntax, rather than specifying a JSON object
//  var query = Person.findOne({ 'name.last': 'Ghost' });
//  query.select('name occupation');
//  query.exec(function (err, person) {});



//   Mongoose query CRUD function : https://mongoosejs.com/docs/queries.html https://mongoosejs.com/docs/models.html

// Populate : https://mongoosejs.com/docs/populate.html

// Story.
//   findOne({ title: 'Casino Royale' }).
//   populate('author').               ->  populating our story's author using the query builder
//   exec(function (err, story) {})

// their value is replaced with the mongoose document returned from the database by performing
// a separate query before returning the results

// Promise   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

// Promises are glorified callbacks which simplify the callback hell.
// They came later out of a necessity to simplify things and make it simpler

//async/await is syntactic sugar for promises. It's the latest iteration, completely optional
// and fully compatible with Promises.

// callback ->  promise -> async await   for asynchronous operation

