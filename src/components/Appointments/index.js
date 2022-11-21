import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import AppointmentItem from '../AppointmentItem/index'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentsList: [],
    titleInput: '',
    dateInput: '',
    isFilterActive: false,
  }

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

  getFilteredList = () => {
    this.setState(prevState => ({isFilterActive: !prevState.isFilterActive}))
  }

  getAppointmentsList = () => {
    const {appointmentsList, isFilterActive} = this.state

    if (isFilterActive) {
      return appointmentsList.filter(
        eachAppointment => eachAppointment.isStarred === true,
      )
    }
    return appointmentsList
  }

  toggleStarredButton = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, isStarred: !eachAppointment.isStarred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {titleInput, dateInput, isFilterActive} = this.state
    const filteredAppointmentList = this.getAppointmentsList()
    const filteredClassName = isFilterActive ? 'filled-color' : null
    return (
      <div className="main-container">
        <div className="bg-container">
          <div className="container">
            <div className="large-devices">
              <form className="form" onSubmit={this.getFormRequest}>
                <h1 className="heading">Add Appointment</h1>
                <label className="title-text" htmlFor="title">
                  TITLE
                </label>
                <input
                  className="input-title"
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={titleInput}
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
                  value={dateInput}
                  onChange={this.getDate}
                />
                <button className="button" type="submit">
                  Add
                </button>
              </form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-image"
              />
            </div>
            <hr className="horizontal-line" />
            <div className="appointments-container">
              <h1 className="heading">Appointments</h1>
              <button
                type="button"
                className={`button-starred ${filteredClassName}`}
                onClick={this.getFilteredList}
              >
                Starred
              </button>
            </div>
            <div className="adding-appointment-container">
              <ul className="appointment-list-container">
                {filteredAppointmentList.map(eachAppointment => (
                  <AppointmentItem
                    key={eachAppointment.id}
                    appointmentDetails={eachAppointment}
                    toggleStarredButton={this.toggleStarredButton}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
