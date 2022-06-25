
import './App.css';
import './index.css'
import Pointtable from './components/Pointtable';
import Fixtures from './components/Fixtures';
import Goldenboot from './components/Goldenboot';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Rules from './components/Rules';

function App() {
  return (
    <div className="App overflow-y-scroll">
    <Navbar />
    <div className="mt-24">
    <Routes >
      <Route path='/' element={<Pointtable/>} />
      <Route path='/fixtures' element={<Fixtures/>} />
      <Route path='/goldenboot' element={<Goldenboot/>} />
      <Route path='/rules' element={<Rules/>} />

    </Routes>

     
    </div>
     
    </div>
  );
}

export default App;
