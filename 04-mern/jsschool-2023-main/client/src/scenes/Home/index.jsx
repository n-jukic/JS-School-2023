import { memo, useEffect, useState } from "react";

import Robot from "../../components/Robot";

import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [robots, setRobots] = useState([]);
    const navigate = useNavigate();

    const getAll = async () => {
        const all = await axios.get('api/robot');
        setRobots(all.data);
    }

    const navigateTo = async (id) => {
        navigate(`/update/${id}`);
    }

    useEffect(() => {
        getAll();
    }, []);

    
    if (!robots) {
        return (<div>Loading...</div>);
    }

    return (
        <div>
            {robots.map((robot) => <Robot name={`${robot._id}: ${robot.name}`} type={robot.type} key={robot._id} onClick={() => navigateTo(robot._id)}/>)}
        </div>
    );
}

export default memo(Home);