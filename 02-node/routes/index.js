const { response } = require('express');
var express = require('express');
var router = express.Router();

const Robot = require('../models/Robot');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// router.post('/robot/new', async function(req, res){
//   const newRobot = new Robot({name: req.body.name});  //getting name through body params

//   let nr;
//   try {
//     nr = await newRobot.save();
//   } catch (error) {
//     console.log(error);
//   }
//   res.json(nr);
// });

/* HW02 */
//Write 2 new routes:

//POST /robot/new - create a robot with a name
//doesn't allow adding new Robot instance without a name property
router.post('/robot/new', async function(req, res){
  let newRobot;
  if(!req.body.name){
    res.status(400).send("Missing body params.");
    return;
  }else{
    newRobot = new Robot({name: req.body.name});
  }

  let nr;
  try {
    if(newRobot){
      nr = await newRobot.save();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.")
    return;
  }
  res.json(nr);
});

//GET /robot/name - find all robots that have query (through query params) in any part of their name. Case insensitive.
router.get('/robot/name', async function(req, res){
  let robots;
  try {
    if(!req.query.name){
      res.status(400).send("Missing params.");
      return;
    }else{
      const {name} = req.query;
      robots = await Robot.find({name: {$regex: name, $options: 'i'}});
    } 
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error.")
    return;
  }
  res.json(robots);
});

module.exports = router;
