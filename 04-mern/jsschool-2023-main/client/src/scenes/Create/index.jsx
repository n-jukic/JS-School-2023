import { memo, useState, useEffect } from "react";

import Button from "../../components/Button";
import styles from './Create.module.css';
import Input from "../../components/Input";

import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Create = () => {
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

    useEffect(() => {
        getRobot();
    }, [id]);

    const getRobot = async () => {
        if(!id){
            setName('');    
            setType(0);
            return;
        }else{
            const robot = await axios.get(`../api/robot/update/${id}`);
            console.log("Found robot: ", robot);
            setName(robot.data.name);
            setType(robot.data.type);
        }
        setHasError(false);
    }

    const onInputChange = (value) => {
        setHasError(false);
        setName(value);
    }

    const onSubmit = async () => {
        
        try {
            //if useParams returns no id, it means we are not on the update screen, but the create screen
            if(!id){
                console.log("Created robot ", type, name);
                await axios.post('api/robot/create', {name, type});    
            }else{
                console.log("Updated robot: ", type, name);
                await axios.put(`../api/robot/update/${id}`, {name, type});
            }
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
            <Input onChange={onInputChange} hasError={hasError} val={name}/>
            <Button label={"Submit"} onClick={onSubmit}/>
        </form>
    );
}

export default memo(Create);