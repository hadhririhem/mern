import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './Views/Main';
import DisplayOne from './Components/DisplayOne';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element= {<Main />} path='/'/>
          <Route element={ <DisplayOne /> } path='/product/:id'  /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
