import React from 'react'
import Child from './child'
import "./App.css"

export default function App() {
  const name="sairam B"
  const email="sairambanti@thestackly.com"
  const role="Frontend Developer"

  const name1="Rajkumar B"
  const email1="Rajukumar105@gmail.com"
  const role1="Devops Engineer"

  const name2="Kevin Joseph"
  const email2="kevinjosephrubin@thestackly.com"
  const role2="Fullstack Developer"

  const name3="Ramya Gheesala"
  const email3="Ramyagheesala52@gmail.com"
  const role3="Student"

  const name4="Naveen Nayika"
  const email4="naveennayika21@gmail.com"
  const role4="Employee"




  


  return (
    <div>
      <Child name={name} email={email} role={role}/>
      <Child name={name1} email={email1} role={role1}/>
      <Child name={name2} email={email2} role={role2}/>
      <Child name={name3} email={email3} role={role3}/>
      <Child name={name4} email={email4} role={role4}/>
      
      
      





    </div>
  )
}
