import React from 'react'
import "../src/style/Sign.css"
import{ useNavigate } from 'react-router-dom'
import Logo from "../src/image/login logo.jpg"
const Sign = () => {
  const navigate = useNavigate()
  const mainnavigation = ()=>{
    navigate('/main')
  }
  return (
    <div className='Sign'>
        <div>
            <img src={Logo} alt={Logo} width={150} height={60}/>
        </div>

        <div className='SignBox'>
          <h1 className='Heading'>Sign In</h1>
          <input  type='email' placeholder='EmailAddress' className='Email'></input>
          <input  type='password' placeholder='password' className='Pass'></input>
          <button className='SignButton' type='submit' onClick={mainnavigation}> Sign In</button>
          <span>New to Netflix? <b>Sign Up Now</b></span>
        </div>

    </div>
  )
}

export default Sign