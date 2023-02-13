import React, { useState } from "react";
import "./toggle.css";

function Toggle() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={isToggled}
        onChange={handleToggle}
        id="toggle"
        className="toggle-input"
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-button" />
      </label>
      <p>Toggle is {isToggled ? "On" : "Off"}</p>
    </div>
  );
}

export default Toggle;
