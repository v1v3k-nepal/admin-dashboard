import React from 'react'
import "./_loginForm.scss"

const LoginForm = () => {
  return (
    <div className='login-container'>
        <form action="">
            <h1>Login</h1>
            <div className="input-fields">
                <input type="text" placeholder='Username'/>
                <input type="password" name="password" placeholder='Password'/>
            </div>
            <button className='login-btn'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm