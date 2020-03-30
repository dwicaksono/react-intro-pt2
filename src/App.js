import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'
import UserInput from './Components/UserInput'
import UserOutput from './Components/UserOutput'

class App extends Component {
  state = {
    persons: [
      { id: "1", name: 'kevin', age: 21 },
      { id: "2", name: 'ajax', age: 24 },
      { id: "3", name: 'axios', age: 28 },
    ],
    togglePerson: false,
    user: ''
  }


  toggleNameHandler = () => {
    const toggle = this.state.togglePerson
    this.setState({ togglePerson: !toggle })
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }


  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = { ...this.state.persons[personIndex] }
    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person
    this.setState({ persons: persons })
  }

  inputUser = (event) => {
    this.setState({ user: event.target.value })
    // console.log(event.target.value, '<<<<')
  }

  deleteChar = (index) => {
    // console.log(index, '<<<<< index')
    const text = this.state.user.split('')
    text.splice(index, 1)
    const updateText = text.join('')
    this.setState({ user: updateText })
  }

  render() {
    let statusToggle = null
    if (this.state.togglePerson) {
      statusToggle = (
        < div >
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} deleted={() => this.deleteNameHandler(index)} key={person.id} changed={(event) => this.changeNameHandler(event, person.id)} />
          })}
        </div >
      )
    }

    let userChar = this.state.user.split('').map((usr, index) => {
      return < UserOutput char={usr} key={index} clicked={() => this.deleteChar(index)} />
    })

    return (
      <div className="App">
        <h2>This Realy Work!</h2>
        <button onClick={this.toggleNameHandler}>Toggle Name</button>
        {statusToggle}
        <input type="text" onChange={this.inputUser} value={this.state.user} />
        <p>ini : {this.state.user}</p>
        <UserInput inputLength={this.state.user.length} />
        {userChar}
      </div >
    )
  }
}


export default App;
