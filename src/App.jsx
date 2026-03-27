import React from 'react'
import "./App.css"
import StudentCard from './studentCard'
import RegistrationForm from './RegistrationForm'

export default function App() {
  

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{textAlign:"center",fontSize:"40px"}}>Registration Form</h1>
      <RegistrationForm/>
      



    </div>
  )
}
