import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './Components/Dashboard';
import AuthorForm from './Components/Create';


function App() {
  const [authorList, setAuthorList] = useState([]); 
  const removeFromDom = authorId => {
      setAuthorList(authorList.filter(author => author._id !== authorId)); 
  }
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route element={ <AuthorList
          authorList={authorList} 
          setAuthorList={setAuthorList}
          removeFromDom={removeFromDom} /> } path='/' />

          <Route element={ <AuthorForm 
          authorList={authorList} 
          setAuthorList={setAuthorList} />} path='/createauthor' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
