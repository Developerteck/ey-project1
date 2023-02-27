import React, { useState } from "react";
import "./loginstyle.css";

const Login1 = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here

    alert("Login successful");
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here

    alert("check your email for OTP ");
    setIsOtpSent(true);
  };

  const handleOtpVerification = (e) => {
    e.preventDefault();
    // Handle OTP verification logic here
    alert("Registration successful");
  };

  return (
    <>
      <div className="left-items">
        <img
          style={{ maxWidth: "800px" }}
          alt="Company"
          src="/assets/icons/login.jpg"
        />
        <div className="form-container">
          <img
            style={{ padding: "8px", height: "80px", width: "60px" }}
            alt="Company"
            src="/assets/icons/companylogo.png"
          />
          <h1>{isLogin ? "Login" : "Sign up"}</h1>
          {isOtpSent ? (
            <form onSubmit={handleOtpVerification}>
              <label htmlFor="otp">Enter OTP:</label>
              <input
                type="text"
                id="otp"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
              />
              <button type="submit">Verify OTP</button>
            </form>
          ) : (
            <form onSubmit={isLogin ? handleLogin : handleSignUp}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">{isLogin ? "Login" : "Sign up"}</button>
            </form>
          )}
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Login1;
