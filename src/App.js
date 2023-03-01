import './App.css';
import Home from './pages/Home';
import About from './components/About';
import Change from './components/Change';
import React ,{useState} from 'react';
import List from './components/List';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <List/> */}
      <LoginForm/>
    </div>
  );
}

export default App;
