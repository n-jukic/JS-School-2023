import { Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navigation from './components/Navigation';
import Create from './scenes/Create';
import Home from './scenes/Home';
import Update from './scenes/Update';

const App = () => {
  return (
    <div className={styles.app}>
      <Navigation />
      <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/create" element={<Create />} />
         <Route path="/update/:id" element={<Create />}/>
      </Routes>
    </div>
  );
}

export default App;