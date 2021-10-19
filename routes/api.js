import express from 'express';

const router = express.Router();

import Fruit from '../models/fruit.js';

router.get('/fruits', (req, res) => {
  Fruit.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  })
    .then((result) => {
      console.log('result', result);
      //send json back to the user
      res.json(result);
    })
    .catch((err) => {
      console.log('err', err);
    });
});

router.get('/season/:season', (req, res) => {
  console.log(req.params, 'req.params');

// try{
//   const fruits = await Fruit.find({"season":req.params.season}).exec();
//   return res.json(fruits)
// }catch(e){
//   return res.json([])
// }


  Fruit.find({ season: req.params.season })
    .exec()
    .then((fruits) => {
      res.json(fruits);
    })
    .catch(() => {
      res.json([])
    });


});

// router.post('/save', (req, res) => {
//   console.log(req.body, 'REQUEST');
//   res.json({ msg: 'data recieved' });
// });

export default router;

// March:Artichoke, Beetroot, Cabbage, Carrots, Chicory, Cucumber, Leeks, Parsnip, Purple Sprouting Broccoli, Radishes, Sorrel, Spring Greens, Spring Onions, Watercress

// April:Artichoke, Beetroot, Cabbage, Carrots, Chicory, New Potatoes, Kale, Morel Mushrooms, Parsnips, Radishes, Rocket, Sorrel, Spinach, Spring Greens, Spring Onions, Watercress

// May: Artichoke, Asparagus, Aubergine, Beetroot, Chicory, Chillies, Elderflowers, Lettuce, Marrow, New Potatoes, Peas, Peppers, Radishes, Rocket, Samphire, Sorrel, Spinach, Spring Greens, Spring Onions, Watercress

// https://www.bda.uk.com/food-health/your-health/sustainable-diets/seasonal-fruit-and-veg-a-handy-guide.html