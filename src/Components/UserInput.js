import React from 'react'

const UserInput = (props) => {
  let long = 'text to long'
  if (props.inputLength <= 5) {
    long = 'text to short'
  }
  return (
    <div>
      <p>{long}</p>
    </div>
  )
}

export default UserInput