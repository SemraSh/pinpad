import React from "react";

const Buttons = ({pinHandler, disabled}) => {
  const buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'x']
  return buttons.map((button, i) => (
    <button
      key={i + "button"}
      onClick={() => pinHandler(button)}
      disabled={disabled}
    >{button}</button>
  ))
};

export default Buttons;