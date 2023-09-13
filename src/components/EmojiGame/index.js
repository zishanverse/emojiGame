import {Component} from 'react'
import NavBar from '../NavBar/index'
import WinOrLossCard from '../WinOrLoseCard/index'
import EmojiCard from '../EmojiCard/index'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, top: 0, win: false, loss: false, list: []}

  playAgain = () => {
    const {top} = this.state

    this.setState(pre => {
      if (pre.score > top) {
        return {win: false, loss: false, score: 0, top: pre.score, list: []}
      }
      return {win: false, loss: false, score: 0, list: []}
    })
  }

  clicked = id => {
    const {list} = this.state
    const {emojisList} = this.props
    if (list.includes(id)) {
      this.setState({loss: true, win: false})
    } else {
      if (list.length === emojisList.length - 1) {
        this.setState(pre => ({top: pre.score, win: true, loss: false}))
      }
      this.setState(pre => ({list: [...pre.list, id], score: pre.score + 1}))
    }
  }

  render() {
    const {score, top, win, loss} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }
    if (win === false && loss === false) {
      return (
        <div className="container">
          <NavBar navScore={score} navTop={top} win={win} loss={loss} />
          <div className="card">
            <ul className="list">
              {shuffledEmojisList().map(each => (
                <EmojiCard item={each} key={each.id} func={this.clicked} />
              ))}
            </ul>
          </div>
        </div>
      )
    }

    return (
      <div className="container">
        <NavBar score={score} top={top} win={win} loss={loss} />
        <div className="card">
          <WinOrLossCard
            iswin={win}
            isloss={loss}
            resultscore={score}
            func2={this.playAgain}
          />
        </div>
      </div>
    )
  }
}

export default EmojiGame

/*
const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}
*/
