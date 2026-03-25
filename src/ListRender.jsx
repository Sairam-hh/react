import React from 'react'
import Child from './child'

export default function ListRender() {
    const user=[
    {name:"sairam",email:"sairambanti@thestackly.com",city:"Hyderabad",age:21,ph_no:7995358828},
    {name:"Rajkumar",email:"rajkumarbanti31@gmail.com",city:"Chennai",age:20,ph_no:7893832885},
    {name:"Ramya",email:"ramyageesala10@gmail.com",city:"Vizag",age:22,ph_no:8154638870},
    {name:"chaitanya",email:"chaitanyachinni33@gmail.com",city:"Banglore",age:25,ph_no:7093563273},
    {name:"Naveen",email:"naveennayika2@gmail.com",city:"Mumbai",age:20,ph_no:7093578745}
    
    ]

  return (
    <div>
        <h2 style={{padding:"20px",}}>User Details</h2>
      <ul>
        {user.map((data,index)=>(
            <li key={index} style={{backgroundColor:"skyblue",
                margin:"10px"

            }}>
                
                <p><strong>Name:</strong>{data.name}</p>
                <p><strong>Email:</strong>{data.email}</p>
                <p><strong>City:</strong>{data.city}</p>
                <p><strong>Age:</strong>{data.age}</p>
                <p><strong>Ph_No:</strong>{data.ph_no}</p> <br />
                
            </li>
    
                
            ))}
      </ul>
    </div>
  )
}
