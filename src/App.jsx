import React from 'react'
import "./App.css"
import StudentCard from './studentCard'

export default function App() {
  const student=[
    {id:1,name:"Sairam B",course:"javaSscript",isActive:true},
    {id:2,name:"Rajkumar B",course:"ReactJs",isActive:false},
    {id:3,name:"Ramya G",course:"NodeJs",isActive:true},
    {id:4,name:"Pavan G",course:"ExpressJs",isActive:false},
    {id:4,name:"Kevin J",course:"Python",isActive:false},
    {id:4,name:"Naveen N",course:"MangoDB",isActive:true}

  ]

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ color: "#4a90e2", marginBottom: "30px" }}> 🎓 Student List</h1>
      <div style={{display:"flex", flex:"wrap"}}>
        {student.map((student)=>(
          <StudentCard key={student.id} student={student}/>
          

        ))}
      </div>







      










      
      
      
      





    </div>
  )
}
