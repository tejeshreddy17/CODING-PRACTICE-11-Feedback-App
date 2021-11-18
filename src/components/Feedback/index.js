// Write your React code here.
import {Component} from 'react'

import './index.css'

const ThankyouScreen = props => {
  const {emojis, clickingName} = props
  const {name, imageUrl} = emojis
  const onclickingFeedback = () => {
    clickingName(name)
  }
  return (
    <li className="each-feedback-card">
      <img
        className="smile-style"
        onClick={onclickingFeedback}
        src={imageUrl}
        alt={name}
      />
      <p>{name}</p>
    </li>
  )
}

class Feedback extends Component {
  state = {isFeedbackCLicked: false}

  clickingName = () => {
    this.setState({isFeedbackCLicked: true})
  }

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isFeedbackCLicked} = this.state

    return (
      <div className="background-card">
        {!isFeedbackCLicked && (
          <div>
            <div className="feedback-card">
              <h1 className="heading-style">
                How satisfied are you with our customer Support Performance
              </h1>
              <div className="feedback-emojis-card">
                {emojis.map(eachemoji => (
                  <ThankyouScreen
                    clickingName={this.clickingName}
                    emojis={eachemoji}
                    key={eachemoji.name}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {isFeedbackCLicked && (
          <div className="feedback-card">
            <img className="smile-style" src={loveEmojiUrl} alt="love emoji" />
            <h1>Thank You</h1>
            <p>
              We Will use your Feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
