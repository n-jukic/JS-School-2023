import Robot from '../models/robot.model';

import {Err} from '../utils/error.util';

export const create = async (req, res) => {
    const { name, type } = req.body;

    if(name === ""){
        throw new Err(400, "Name is required");
    }else{
        const newRobot = new Robot({ name, type });
        await newRobot.save();

        res.sendStatus(204);
    }
    
}

export const getAllRobots = async (req, res) => {
    const allRobots = await Robot.find();
    res.json(allRobots);
}

export const getById = async (req, res) => {
    const {id} = req.params;
    console.log("requested id is ", id);
    const robot = await Robot.findById(id);
    console.log("robotfrom getById: ", robot)
    res.json(robot);
}

export const update = async (req, res) => {
    const {id} = req.params;
    const {name, type} = req.body;
    let robot;
    robot = await Robot.findById(id);
    
    if(name === "" || type === ""){
        throw new Err(400, "Missing parameters");
    }else{
        robot.name = name;
        robot.type = type;
    
        await robot.save();
        res.sendStatus(204);
    }
}