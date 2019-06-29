const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const Movie = require('../models/Movies');


/* GET movies */
router.get('/', (req, res, next) => {


    Movie.find({},{title:1, image:1})
        .then((lista) => {
            console.log(lista);
            const data = {lista};
            res.render('movies', data);
        })
        .catch(error => {

            }
        );


});

module.exports = router;
