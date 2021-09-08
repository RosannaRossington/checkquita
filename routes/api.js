const express = require('express');
const router = express.Router();

const Fruit = require('../models/fruit')


router.get('/fruits', (req, res) => {
    
    Fruit.find({}, (err, result) => {
        if (err) { 
            console.log(err);
        } else {
            console.log(result);
        }})
    .then((result)=>{
        console.log('result', result)
        //send json back to the user
        res.json(result)
    })
    .catch((err) => {
        console.log('err', err)
    })
});


router.get('/seasons', (req, res) => {
    const data = [{
        season: 'autumn',
        months: ['september', 'october', 'november']
    }, {
        season: 'winter',
        months: ['december', 'january', 'february']
    }, {
        season: 'spring',
        months: ['april', 'may', 'june']
    }, {
        season: 'summer',
        months: ['june', 'july', 'august']
    },  ];

    res.json(data);

});

router.post('/save', (req, res) => {
    console.log(req.body, 'REQUEST')
    res.json({msg: 'data recieved'})
})


module.exports = router;