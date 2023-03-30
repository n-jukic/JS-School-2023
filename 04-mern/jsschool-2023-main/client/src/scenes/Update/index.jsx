import {memo, useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../../components/Button";
import Input from "../../components/Input";

import styles from "../Create/Create.module.css"
import axios from 'axios';

//Created as first solution to homework, if we want to have Update component/screen separate from Create
//if we want to use this screen we have to change the element to <Update /> in App.jsx for the update path
//final solution uses /scenes/Create for both creating and updating depending on the path

const Update = () => {
    const [type, setType] = useState(0);
    const [name, setName] = useState(''); 
    const [hasError, setHasError] = useState(false);
    const {id} = useParams();
    const navigate = useNavigate();


    const robots = [
        '/robot-1.svg',
        '/robot-2.svg',
        '/robot-3.svg',
        '/robot-4.svg',
        '/robot-5.svg',
        '/robot-6.svg',
        '/robot-7.svg',
        '/robot-8.svg',
        '/robot-9.svg',
        '/robot-10.svg'
    ];

    const getRobot = async () => {
        const robot = await axios.get(`../api/robot/update/${id}`);
        console.log("Found robot: ", robot);
        setName(robot.data.name);
        setType(robot.data.type);
    }

    useEffect(() => {
        getRobot();
    }, []);

    const onNameInputChange = (value) => {
        setHasError(false);
        setName(value);
    }

    const onSubmit = async () => {
        try {
            await axios.put(`../api/robot/update/${id}`, {name, type})
            navigate('/');
        } catch (error) {
            console.log(error);
            setHasError(true);
        }
    }

    return (
        <form className={styles.form}>
            <div className={styles.robotContainer}>
                <img className={styles.robot} src={robots[type]} alt="robot" />
            </div>
            
            <div className={styles.buttonContainer}>
                {
                    robots.map((url, index) => {
                        return <Button key={url} label={index + 1} onClick={() => setType(index)} />
                    })
                }
            </div>
                
            <Input onChange={onNameInputChange} hasError={hasError} val={name}/>
            <Button label={"Submit"} onClick={onSubmit}/>
        </form>
    )
}

export default memo(Update);