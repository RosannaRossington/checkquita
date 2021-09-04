const express = require('express');
const router = express.Router();

const Fruit = require('../models/fruit')

router.get('/fruits', (req, res) => {
    
    Fruit.find({}, function (err, result){ // get all albums
        if (err) { // if there will be any error
          console.log(err);
        } else { /// in success case in which records from DB is fetched
        console.log(result);
        }})
    .then((data)=>{
        console.log('data', data)
        //send json back to the user
        res.json(data)
    })
    .catch((err) => {
        console.log('err', err)
    })
});


router.get('/seasons', (req, res) => {
    const data = {
        season: 'autumn',
        month: 'november'
    };

    res.json(data);

});

module.exports = router;