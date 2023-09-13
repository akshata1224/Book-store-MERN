import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home';
import CreateBook from './pages/createBook';
import EditBook from './pages/editBook';
import ShowBook from './pages/showBook';
import DeleteBook from './pages/deleteBook';


const App =() =>{
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/books/create' element={<CreateBook />}/>
      <Route path='/books/edit/:id' element={<EditBook/>}/>
      <Route path='/books/details/:id' element={<ShowBook/>}/>
      <Route path='/books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}
export default App;