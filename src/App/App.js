import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reserve: [],
      name: '',
      time: '',
      date: ''
    }
    this.updateName = this.updateName.bind(this)
    this.updateDate = this.updateDate.bind(this)
    this.updateTime = this.updateTime.bind(this)
    this.addRes = this.addRes.bind(this)
  }

  componentDidMount() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then(response => response.json())
      .then((data) => {
        this.setState({ reserve: data })
      })

  }

  listResy() {
    console.log(this.state.reserve)
    return this.state.reserve.map((res) => {
      return (
        <div>
          <p className='res'>{res.name} {res.date} {res.time}</p>
        </div>
      )
    })
  }

  listNewResy() {
    console.log(this.state.new)
    return this.state.new.map((res) => {
      return (
        <div>
          <p className='res'>
            {res.name} {res.date} {res.time}
            </p>
        </div>
      )
    })
  }

  deleteRes() {
    console.log('click!')
  }

  updateName(event) {
    this.setState({ name: event.target.value })
    console.log(this.state.name)
  }

  updateDate(event) {
    this.setState({ date: event.target.value })
    console.log(this.state.date)
  }

  updateTime(event) {
    this.setState({ time: event.target.value })
    console.log(this.state.time)
  }

  addRes(event) {
    event.preventDefault()
    console.log('click!')
    const newRes = [{name: this.state.name, date: this.state.date, time: this.state.time}]

    fetch(`http://localhost:3001/api/v1/reservations`, 
    {method: 'POST',
    headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({name: this.state.name, 
        date: this.state.date, 
        time: this.state.time, 
        number: Date.now()})
    })

    this.setState({reserve: [...this.state.reserve, ...newRes]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <form>
            <label for='name'>Name:</label>
            <input type='text' id='name' value={this.state.name} onChange={this.updateName}></input><br></br>
            <label for='date'>Date:</label>
            <input type='text' id='date' value={this.state.date} onChange={this.updateDate}></input><br></br>
            <label for='time'>Time:</label>
            <input type='text' id='time' value={this.state.time} onChange={this.updateTime}></input><br></br>
            <button onClick={this.addRes}>Make Reservation</button>
          </form>
        </div>
        <div className='resy-container'>
          {this.listResy()}

        </div>
      </div>
    )
  }
}

export default App;