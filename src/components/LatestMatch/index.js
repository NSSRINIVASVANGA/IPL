import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    firstInnings,
    secondInnings,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
  } = details

  return (
    <div className="latest-match-card">
      <h1 className="heading"> Latest Matches </h1>
      <div className="match-details-card">
        <div className="part-1">
          <div>
            <p className="heading"> {competingTeam} </p>
            <p> {date} </p>
            <p> {venue} </p>
            <p> {result} </p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="logo"
          />
        </div>
        <hr className="line" />
        <div className="part-2">
          <h1 className="heading"> First Innings </h1>
          <p> {firstInnings} </p>
          <h1 className="heading"> Second Innings </h1>
          <p> {secondInnings} </p>
          <h1 className="heading"> Man Of The Match </h1>
          <p> {manOfTheMatch} </p>
          <h1 className="heading"> Umpires </h1>
          <p> {umpires} </p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
