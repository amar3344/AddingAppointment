import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails} = props
  const {titleInput, dateInput, isStarred, id} = appointmentDetails
  const starredImage = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="appointment-list">
      <div className="title-starred-container">
        <h1 className="appointment-title">{titleInput}</h1>
        <button type="button" className="star-image-button">
          {starredImage}
        </button>
      </div>
      <p className="date-format">
        Date:{format(new Date({dateInput}), 'dd MMMM yyyy, EEEE')}
      </p>
    </li>
  )
}

export default AppointmentItem
