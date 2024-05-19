import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {id, name, teamImageUrl} = details

  return (
    <Link to={`/team-matches/${id}`} className="link">
      <li>
        <div className="card">
          <img src={teamImageUrl} alt={name} className="team-img" />
          <p> {name} </p>
        </div>
      </li>
    </Link>
  )
}

export default TeamCard
