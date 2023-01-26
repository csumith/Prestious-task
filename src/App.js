import React from 'react'
import Menu from './Component/Menu'
import Home from './Component/Home'
import HeadTail from './Component/HeadTail'
import About from './Component/About'
import Pnf from './Component/Pnf'
import {BrowserRouter} from 'react-router-dom'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter>
      

        <Menu/>
        <ToastContainer autoClose={1000}  position={"bottom-center"}/>
       
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/headTail'} element={<HeadTail/>}/>
            <Route path={'/about'} element={<About/>}/>
            <Route path = {'/*'} element ={<Pnf/>}/>

        </Routes>
       
    </BrowserRouter>
  )
}

export default App