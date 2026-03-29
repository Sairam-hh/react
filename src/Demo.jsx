import React, { useState } from 'react'

export default function Demo() {
const [formData,setFormData]=useState({
    Name:"",
    email:"",
    age:"",
    checkbox:true

});

const handleChange=(e)=>{
    const {name,value,type,checked}=e.target
    setFormData({
        ...formData,
        [name]:type==="checkbox"?checked:value,
    })

}
console.log(formData);



  return (
    <div>
        
        <h2>Registration Field</h2>
        <label htmlFor="">Name</label>
        <input  name="Name" type="text"  value={formData.Name} onChange={handleChange}/>

        <label htmlFor="">email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange}/>

        <label htmlFor="">Age</label>
        <input name="age" type="number" value={formData.age} onChange={handleChange}/>

        <label htmlFor="">checkbox</label>
        <input name="checkbox" type="checkbox" checked={formData.checkbox} onChange={handleChange} />
        

















        
    </div>
  )
}
