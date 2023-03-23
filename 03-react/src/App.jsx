//import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {
  //const [isCounterVisible, setCounterVisible] = useState(true);   
  const [totalCounter, setTotalCounter] = useState(0);
  const initialCounter = 0;
  const [counters, addCounter] = useState([]);
  const [maxId, setId] = useState(0);           //to avoid setting id as already existing one after removing counters 

  //changing total counter value based on performed action (remove, +, -)
  /*HW: Total in App should be updated accordingly*/
  const changeTotal = (action, amt) => {
    if(action === "remove"){
      setTotalCounter(totalCounter - amt);
    }else if(action === "-"){
      setTotalCounter(totalCounter - 1);
    }else{
      setTotalCounter(totalCounter + 1);
    }
  }

  //removing counter from the list based on value of id property
  const removeCounter = (id) => {
    const newCounters = counters.filter((item) => item.id !== id);  //we're using state which is meant to be immutable so we can't update the array by mutating it
    addCounter(newCounters);      //instead we use filter to create shallow copy of the original array
  }

  //creates new id when adding new counter -- replaced using counters.length to avoid scenarios of setting id to existing id after removing counters
  const getId = () => {
    setId(maxId + 1);
    return maxId;
  }
  // const counterArray = new Array(5).fill(1);

  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        {counters.map((item, index) => {
          return (
          <Counter 
            initial={initialCounter} 
            changeTotal={changeTotal} 
            total={totalCounter}
            removeCounter={removeCounter} 
            key={item.id}
            id={item.id}    //passing item.id as another prop so it can be accessed from Counter
          />);
        })}
        <button onClick={() => { addCounter([...counters, {id:getId()}]) }}> Add counter </button>
      </header>
      {//console.log(counters)
      }
    </div>
  );
}

export default App;

// {isCounterVisible 
//   ? <Counter 
//       initialCounter={0}
//       changeTotal = {changeTotal}
//       total = {totalCounter}
//     /> : null}

// <button
//  onClick={()=>{setCounterVisible(!isCounterVisible);}}>
//  {isCounterVisible ? "Hide" : "Show"}    
// </button>


