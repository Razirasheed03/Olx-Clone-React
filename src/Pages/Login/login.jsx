import React, { useState } from 'react'
import './Login.css'
// import logo from '../../assets/logo.png'
import { login, signup } from '../../Service/firebase'

const Login = () => {
  const [signState, setSignState] = useState("Sign In")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (signState === "Sign In") {
        await login(email, password)
        // No need for navigation here - App.js handles this with onAuthStateChanged
      } else {
        await signup(name, email, password)
        // No need for navigation here - App.js handles this with onAuthStateChanged
      }
    } catch (error) {
      console.error("Authentication error:", error)
      setError(error.message || "Authentication failed. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='login-container'>
      <div className="login-card">
        {/* <img src={logo} className='olx-logo' alt="OLX Logo" /> */}
        <div className="logo-placeholder">OLX</div>

        <div className="tabs">
          <button
            className={signState === "Sign In" ? "tab-active" : "tab"}
            onClick={() => setSignState("Sign In")}>
            Sign In
          </button>
          <button
            className={signState === "Sign Up" ? "tab-active" : "tab"}
            onClick={() => setSignState("Sign Up")}>
            Sign Up
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <form className="login-form">
          {signState === "Sign Up" && (
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="remember-container">
            <div className="remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button
            onClick={user_auth}
            type='submit'
            className="submit-btn"
            disabled={loading}
          >
            {loading ? "Processing..." : signState}
          </button>
        </form>

        <div className="divider">
          <span>or continue with</span>
        </div>

        <div className="social-login">
          <button className="social-btn google">Google</button>
          <button className="social-btn facebook">Facebook</button>
        </div>

        <div className="login-footer">
          {signState === "Sign In" ? (
            <p>New to OLX? <a onClick={() => setSignState("Sign Up")}>Create an account</a></p>
          ) : (
            <p>Already have an account? <a onClick={() => setSignState("Sign In")}>Sign in</a></p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login