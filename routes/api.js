import express from 'express';
import Fruit from '../models/fruit.js';

const router = express.Router();

//search the fruits checking res.season is === clicked season
router.get('/fruits/:season', (req, res) => {
   const fruitQuery = { season: req.params.season };
  //  Fruit.count(fruitQuery) //total amount
  //  pageLimit = 5 

  //  numberOfPage 
   Fruit.find(fruitQuery) //return fruit names
    .exec()
    .then( (result) => {
      console.log(result, 'result')
      let inseason = result.map(p => p.name);
      return res.json(inseason)
    })
    .catch((err) => {
      console.log('err', err);
    });
});

// //pick a season and see all fruit and veg
// router.get('/season/:season', async (req, res) => {
// //   try{
// //   const fruits = await Fruit.find({"season":req.params.season})
// //   .exec();
// //   return res.json(fruits)
// // }catch(e){
// //   return res.json([])
// // }
//   Fruit.find({ season: req.params.season })
//     .exec()
//     .then((fruits) => {
//       res.json(fruits);
//     })
//     .catch(() => {
//       res.json([]);
//     });
// });

router.post('/save', (req, res) => {
  console.log(req.body, 'REQUEST');
  res.json({ msg: 'data recieved' });
});

export default router;


// https://www.bda.uk.com/food-health/your-health/sustainable-diets/seasonal-fruit-and-veg-a-handy-guide.html
