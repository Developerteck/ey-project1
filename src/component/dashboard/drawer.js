import React, { useState } from "react";
import "./drawer.css";

const Drawer = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>Toggle Drawer</button>
      {visible && (
        <div className="drawer">
          <p>This is the contents of the drawer.</p>
        </div>
      )}
    </div>
  );
};

export default Drawer;
