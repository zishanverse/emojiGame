import './index.css'

const NavBar = props => {
  const {navScore, navTop, win, loss} = props

  return (
    <div className="navbar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        alt="emoji logo"
        className="logo"
      />
      {!win ||
        (!loss && (
          <div className="navContent">
            <p className="score">Score:{navScore}</p>
            <p className="score">Top Score:{navTop}</p>
          </div>
        ))}
    </div>
  )
}

export default NavBar
