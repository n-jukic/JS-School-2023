import { memo, useState } from "react"

import styles from './Input.module.css';

const Input = (props) => {
    const { onChange, hasError, val } = props;
    const [value, setValue] = useState('');
    
    return (
        <input
            className={hasError ? styles.input + ' ' + styles.errors : styles.input }
            value={val}
            onChange={(e) => {
                setValue(e.target.value);
                onChange(e.target.value);
            }}
        />
    )
}

export default memo(Input)