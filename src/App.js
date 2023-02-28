import './App.css';
import Home from './pages/Home';
import About from './components/About';
import Change from './components/Change';
import React ,{useState} from 'react';
import List from './components/List';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <List/>
    </div>
  );
}

export default App;
