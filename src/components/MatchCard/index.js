import './index.css'

const MatchCard = props => {
  const {details} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = details

  const name = matchStatus === 'Lost' ? 'red' : 'green'

  return (
    <li className="match-card">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} className="logo" />
      <p className="heading"> {competingTeam} </p>
      <p> {result} </p>
      <p className={name}> {matchStatus} </p>
    </li>
  )
}

export default MatchCard
