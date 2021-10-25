import React from 'react';

const Pin = ({ userInput, validation }) => {
  const inputField = () => {
    let lastInput = userInput[userInput.length - 1]
    const fieldArray = [];
    fieldArray.push(<text
      key={'text'}
      textAnchor="middle"
      x={40 + (userInput.length - 1) * 80}
      y={130}
    >{lastInput}</text>)
    for (let i = 0; i < userInput.length - 1; i++) {
      fieldArray.push(<circle
        key={"circle" + i}
        cx={45 + i * 80}
        cy={120}
        r={10}
      />)
    }
    for (let i = userInput.length; i < 4; i++) {
      fieldArray.push(<line
        key={"line" + i}
        x1={20 + i * 80}
        y1={130}
        x2={70 + i * 80}
        y2={130}
      />)
    }
    return fieldArray
  }

  return (
    <svg>
      {validation ?
        <image x={135} y={20} xlinkHref={'./icons/unlocked.svg'}></image> :
        <image x={150} y={20} xlinkHref={'./icons/locked.svg'}></image>
      }
      {inputField()}
    </svg>
  )
};

export default Pin;
