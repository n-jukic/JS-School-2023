import {memo} from "react";

/*HW: Plus, Minus and Remove should all use the same, new, CustomButton component */
const CustomButton = (props) => {
    const {onClick, label} = props;
    
    //if we're not using different styles for different buttons, otherwise would check label in if statement and return an appropriate button
    return (
        <button type="button" onClick={onClick}>{label}</button>
    )

    // if(label === "Remove"){
    //     return ( <button type="button" onClick={onClick}>{label}</button> );
    // }
    // if(label === "+"){
    //     return ( <button type="button" onClick={onClick}>{label}</button> );
    // }
    // if(title === "-"){
    //     return ( <button type="button" onClick={onClick}>{title}</button> );
    // }
    
}

export default memo(CustomButton);