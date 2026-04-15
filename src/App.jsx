import React from 'react'
import "./App.css"
import StudentCard from './studentCard'
import RegistrationForm from './RegistrationForm'

import Timer from './Components/StopWatch'
import StopWatch from './Components/StopWatch'
import UseEffectApi from './Components/UseEffectApi'
import ChatBox from './Components/ChatBox'
import UseRefHook from './Components/UseRefHook'
import Parent from './Context/Parent'
import Form from './Components/Form'
import TicTacToe from './Components/Tic-Tac-ToeGame'
import { BrowserRouter,Link, Routes, Route } from 'react-router-dom'
import About from './Router/About'
import Home from './Router/Home'
import Contact from './Router/Contact'
import Profile from './Router/Profile'
import Service from './Router/Service'
import WebDevelopment from './Router/WebDevelopment'
import AppDevelopment from './Router/AppDevelopment'
import UxDevelopment from './Router/UxDevelopment'
import UserList from './UserList'
import UserDetails from './UserDetails'
import Crud from './Components/Crud'





export default function App() {
  
  

  return (
    <div>

      <Crud/>

      {/* <BrowserRouter>

      <Link to="/user" style={styles.link}>User List</Link>
      
      
      <Routes>
          <Route path="/user" element={<UserList/>} />
          <Route path="/user/:id" element={<UserDetails/>} />
          
          
      </Routes>


      </BrowserRouter> */}

      
      
      {/* <BrowserRouter>
          <div className='head'>
            <Link to="/about">About</Link>
            <Link to="/home">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/profile">Profile</Link>
            
          </div>



        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/profile" element={<Profile/>} />
          
          
          <Route path="/service" element={<Service/>} >
            <Route path="web-development" element={<WebDevelopment/>}/>
            <Route path="app-development" element={<AppDevelopment/>} />
            <Route path="ui-ux-development" element={<UxDevelopment/>} />
            
          </Route>
          
        </Routes>
      </BrowserRouter> */}



    </div>
  )
}
const styles={
    link:{
      
      position: "fixed",   
      top: 0,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "15px 30px",
      background: "skyblue",
      color: "#fff",
      fontSize:"30px",
      zIndex: 1000,
      textDecoration: "none",
      borderRadius: "10px",
    }

  }
  
