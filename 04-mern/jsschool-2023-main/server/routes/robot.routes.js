import express from 'express';
const router = express.Router();

import * as RobotCtrl from '../controllers/robot.ctrl';
import { asyncHandler } from '../utils/async.util';


router.get('/', asyncHandler(RobotCtrl.getAllRobots));

router.post('/create', asyncHandler(RobotCtrl.create));

router.get('/update/:id', asyncHandler(RobotCtrl.getById));

router.put('/update/:id', asyncHandler(RobotCtrl.update));

// router.get('/id', (req, res) => {res.json(req.params)});

// router.get('/:id', (req, res) => {res.json(req.params)});

// router.get('/', RobotCtrl.getAllRobots); //original line of code

// const middleware = (req, res, next) => {
//     console.log('pozivam middleware')
//     next();
// }
// router.get('/', middleware, RobotCtrl.getAllRobots);

export default router;
