import React from 'react'
const gaya = {
  width: '30px',
  textAlign: 'center',
  display: 'inline-block',
  border: '1px solid black',
  margin: '10px'
}
const UserOutput = (props) => {
  return (
    <div style={gaya} onClick={props.clicked}>
      <p>{props.char}</p>
    </div>
  )
}

export default UserOutput