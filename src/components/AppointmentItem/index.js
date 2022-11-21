import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleStarredButton} = props
  const {titleInput, dateInput, isStarred, id} = appointmentDetails
  const starredImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const getToggleStarredButton = () => {
    toggleStarredButton(id)
  }

  return (
    <li className="appointment-list">
      <div className="title-starred-container">
        <h1 className="appointment-title">{titleInput}</h1>
        <button
          type="button"
          className="star-image-button"
          onClick={getToggleStarredButton}
        >
          <img src={starredImage} alt="star" className="starred-image" />
        </button>
      </div>
      <p className="date-format">
        Date:{format(new Date(dateInput), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
