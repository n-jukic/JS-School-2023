import { useEffect, memo, useState } from "react";
import CustomButton from './CustomButton'; 

// class Counter extends Component{
//     render(){
//         return (
//         <div>ovo je counter</div>
//         )
//     }
// }

const Counter = (props) => {
    const {initial, changeTotal, total, removeCounter, id} = props;
    const [clicks, setClicks] = useState({count: initial});
    

    useEffect(() =>{
        document.title = 'Counter clicked ' + clicks.count + ' times';
    }, [clicks])

    useEffect(() =>{
        return () => {
            console.log('Unmounting!');
        }
    }, [])

    //using new component CustomButton:
    /*HW: Add button to Counter component which will allow removing it
    //Change “Click” button to Plus and Minus buttons, which should add or remove click from the counter
    //Plus, Minus and Remove should all use the same, new, CustomButton component*/
    return (
        <div>
            <p>Clicks: {clicks.count}/{total}</p>
            <CustomButton 
                label="+"
                onClick={() => {
                    clicks.count = clicks.count + 1;
                    changeTotal("+");
                    setClicks({...clicks});
                }}
            />

            <CustomButton 
                label="-"
                onClick={() => {
                    if(clicks.count > 0){
                        clicks.count = clicks.count - 1;
                        changeTotal("-");
                        setClicks({...clicks});
                    }
                }}
            />  
           
            <CustomButton 
                label="Remove"
                onClick={() => {
                    changeTotal("remove", clicks.count)
                    removeCounter(id);
                }}
                
            />
        </div>
    )
}
export default memo(Counter);       //bolje peformanse zbog manje renderanja

 // const isLessThan10 = useMemo(() =>{
    //     console.log('recalculating 10');
    //     return clicks.count < 10;
    // }, [clicks]);


// <button
// onClick={() => {
//     // setClicks(clicks + 1);
//     // console.log('clicked');
//     clicks.count = clicks.count + 1;
//     changeTotal();
//     setClicks({...clicks});     //kad koristimo reference tip npr objekt, nece znati da se vrijednost nekog propertyja promijenila
//                                 //ako dobije setClicks(clicks) nece vidjeti nikakvu promjenu 
// }}>Click</button>