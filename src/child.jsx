import React from 'react'

 export default function Child({name,email,role}) {
  return (
    <div className='greeting'>
        <h1>Name:{name}</h1>
        <p>Email:{email}</p>
        <p>Role:{role}</p>
      
    </div>
  )
}


