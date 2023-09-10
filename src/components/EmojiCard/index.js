import './index.css'

const EmojiCard = props => {
  const {item, func} = props
  const {emojiUrl, emojiName, id} = item

  const clicked = () => {
    func(id)
  }

  return (
    <div className="emojiCard">
      <img src={emojiUrl} alt={emojiName} className="emoji" onClick={clicked} />
    </div>
  )
}

export default EmojiCard
