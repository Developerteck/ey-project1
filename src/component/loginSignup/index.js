import React, { useState } from "react";
import "./formstyle.css";
import Login1 from "./login2";

function Out() {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Login1 />
    </div>
  );
}

export default Out;
