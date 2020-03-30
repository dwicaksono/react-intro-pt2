import React from 'react'
import './Person.css'
const person = (person) => {
  return (
    <div className="Person">
      <h1 onClick={person.deleted}>i am a {person.name}! and my age {person.age} years old</h1>
      <h4>{person.children}</h4>
      <input type="text" value={person.name} onChange={person.changed} />
    </div>
  )
}

export default person