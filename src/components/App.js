import React, { Component } from 'react';
import '../style/App.css';
import Pin from './Pin';
import Buttons from './Buttons';

class App extends Component {
  state = {
    correctPin: '7777',
    userInput: [],
    validation: false,
    message: ' ',
    wrongAttempts: 0,
    disabled: false,
    opacity: 1
  }

  checkWrongAttempts = (newUserInput, wrongAttempts) => {
    this.setState({
      userInput: newUserInput,
      wrongAttempts: this.state.wrongAttempts + 1,
      message: `You have ${2 - wrongAttempts} attempts left`,
    }, () => {
      setTimeout(
        () => this.setState({
          userInput: [],
          validation: false
        }), 1000
      )
    })
  }

  handleWrongAttempts = (newUserInput) => {
    this.setState({
      userInput: newUserInput,
      opacity: 0.5,
      disabled: true,
      message: 30
    }, () => {
      const setIntervalId = setInterval(() => {
        this.setState({
          message: this.state.message - 1,
          userInput: []
        })
      }, 1000)
      setTimeout(() => {
        clearInterval(setIntervalId);
        this.setState({
          disabled: false,
          userInput: [],
          wrongAttempts: 0,
          message: ' ',
          opacity: 1
        })
      }, 30000)
    })
  }

  handleValidPin = (newUserInput, isValid) => {
    this.setState({
      userInput: newUserInput,
      validation: isValid,
      message: 'Unlocked',
      wrongAttempts: 0
    }, () => {
      setTimeout(
        () => this.setState({
          userInput: [],
          validation: false,
          message: ""
        }), 1000
      )
    })
  }

  pinHandler = (input) => {
    const { userInput, correctPin, wrongAttempts, disabled } = this.state
    if (disabled) return;
    let newUserInput = [...userInput, input]
    if (input === 'x') {
      this.setState({
        userInput: userInput.slice(0, -1)
      })
    }
    else if (newUserInput.length < 4) {
      this.setState({
        userInput: newUserInput
      })
    }
    else if (newUserInput.length === 4) {
      let isValid = newUserInput.join('') === correctPin
      if (isValid) {
        this.handleValidPin(newUserInput, isValid)
      }
      else {
        if (wrongAttempts < 2) {
          this.checkWrongAttempts(newUserInput, wrongAttempts)
        }
        else {
          this.handleWrongAttempts(newUserInput)
        }
      }
    }
  }

  render() {
    const { message, opacity, userInput, validation, disabled } = this.state
    return (
      <div className="App">
        <div>
        </div>
        <div className='message'>
          {message}
        </div>
        <div className='pinpad' style={{ opacity }}>
          <div className='input-field'>
            <Pin userInput={userInput} validation={validation} />
          </div>
          <div className='buttons'>
            <Buttons pinHandler={this.pinHandler} disabled={disabled} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
