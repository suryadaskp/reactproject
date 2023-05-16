import logo from './logo.svg';
import './App.css';
import Basics from './components/Basics';
import StateBaics from './components/StateBaics';
import Exp from './components/Exp';
import Mul from './components/Mul';
import { Table } from '@mui/material';
import TableArray from './components/TableArray';
import ArrayObject from './components/ArrayObject';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import TableUi from './components/TableUi';

function App() {
  return (
    <div className="App">
    
   {/*<ArrayObject/>*/}
   <NavBar/>
   <Routes>
     <Route path="/s" element={<StateBaics/>}></Route>
     <Route path="/t" element={<TableArray/>}></Route>
     <Route path="/ax" element={<TableUi/>}></Route>
     
   </Routes>
    </div>
  );
}

export default App;
