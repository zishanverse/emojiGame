import './index.css'

const EmojiCard = props => {
  const {item, func} = props
  const {emojiUrl, emojiName, id} = item

  const clicked = () => {
    func(id)
  }

  return (
    <li className="emojiCard">
      <button type="button" className="emojiBtn" onClick={clicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji" />
      </button>
    </li>
  )
}

export default EmojiCard
