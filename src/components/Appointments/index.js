import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {appointmentsList: [], titleInput: '', dateInput: ''}

  getTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  getDate = event => {
    this.setState({dateInput: event.target.value})
  }

  getFormRequest = event => {
    event.preventDefault()

    const {titleInput, dateInput} = this.state

    const addAppointment = {
      id: uuidv4(),
      titleInput,
      dateInput,
      isStarred: false,
    }

    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, addAppointment],
      titleInput: '',
      dateInput: '',
    }))
  }

  getAppointmentsList = () => {
    const {appointmentsList} = this.state

    return appointmentsList.map(eachAppointment => (
      <AppointmentItem
        key={eachAppointment.id}
        appointmentDetails={eachAppointment}
      />
    ))
  }

  render() {
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="container">
            <h1 className="heading">Add Appointment</h1>
            <form className="form" onSubmit={this.getFormRequest}>
              <label className="title-text" htmlFor="title">
                TITLE
              </label>
              <input
                className="input-title"
                type="text"
                id="title"
                placeholder="Title"
                onChange={this.getTitle}
              />
              <label className="date-text" htmlFor="date">
                DATE
              </label>
              <input
                className="date-input"
                type="date"
                placeholder="dd/mm/yyyy"
                id="date"
                onChange={this.getDate}
              />
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <hr className="horizontal-line" />
            <div className="appointments-container">
              <h1 className="heading">Appointments</h1>
              <button type="button" className="button-starred">
                Starred
              </button>
            </div>
            <ul className="appointment-list-container">
              {this.getAppointmentsList()}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
