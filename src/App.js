import React from 'react'
import Navbar from './components/navbar'
import Menubar from './components/menubar'
import Login from './components/login'
import Signup from './components/signup'
import HomePage from './components/homePage'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';

const App=()=>{
return(
  <BrowserRouter>
<HomePage />
  <Routes>
        <Route exact path='/navbar' element={< Navbar />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
        <Route exact path='/signup' element={< Signup />}></Route>
        <Route exact path='/homepage' element={< HomePage />}></Route>
 </Routes>
 
</BrowserRouter>
)
}

export default App