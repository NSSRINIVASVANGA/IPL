import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {matchList: [], toLoad: true}

  componentDidMount() {
    this.getMatchList()
  }

  getMatchList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({matchList: updatedData, toLoad: false})
  }

  render() {
    const {matchList, toLoad} = this.state
    return (
      <div className="bg-container">
        {toLoad ? (
          <div testid="loader">
            {' '}
            <Loader type="Oval" color="#ffffff" width={50} height={50} />{' '}
          </div>
        ) : (
          <div className="extra-container">
            <div className="heading-con">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo"
              />
              <h1 className="heading"> IPL Dashboard </h1>
            </div>
            <ul className="list-con">
              {matchList.map(eachItem => (
                <TeamCard details={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
