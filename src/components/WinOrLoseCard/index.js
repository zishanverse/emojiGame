import './index.css'

const WinOrLossCard = props => {
  const {iswin, isloss, resultscore, func2} = props

  const playAgain = () => {
    func2()
  }
  if (iswin && !isloss) {
    return (
      <div className="winOrLossCard">
        <div className="resultCardContent">
          <h1 className="heading">You Won</h1>
          <p className="bestScore">Best Score</p>
          <p className="resultScore">{resultscore}/12</p>
          <button type="button" className="btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
          alt="win or lose"
          className="wonOrLossImg"
        />
      </div>
    )
  }

  return (
    <div className="winOrLossCard">
      <div className="resultCardContent">
        <h1 className="heading">You Lose</h1>
        <p className="bestScore">Score</p>
        <p className="resultScore">{resultscore}/12</p>
        <button type="button" className="btn" onClick={playAgain}>
          Play Again
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
        alt="win or lose"
        className="wonOrLossImg"
      />
    </div>
  )
}

export default WinOrLossCard
