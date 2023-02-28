import './App.css';
import Home from './pages/Home';
import About from './components/About';
import Change from './components/Change';
import React ,{useState} from 'react';


function App() {
  const [page, setPage] = useState(0)
  const handleClick = () => {
    if(page === 0){
      setPage(1)
    }else if(page === 1){
      setPage(0)
    }
    console.log(page)

  }
  return (
    <div className="App">
    <Change page = {page}/>
      {/* <Home/> */}
      <button onClick={handleClick}>Change</button>
      
    </div>
  );
}

export default App;
