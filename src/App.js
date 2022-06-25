import logo from './logo.svg';
import './App.css';
import './index.css'
import Pointtable from './components/Pointtable';
import Fixtures from './components/Fixtures';
import Goldenboot from './components/Goldenboot';

function App() {
  return (
    <div className="App overflow-y-scroll">
      {/* <Fixtures /> */}
      {/* <Pointtable /> */}
      <Goldenboot />
    </div>
  );
}

export default App;
