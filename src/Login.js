import React, { useState } from 'react'
import "./style/Login.css"
import { useNavigate } from 'react-router-dom'
import Logo from "../src/image/login logo.jpg"
import Sign from './Sign'
const Login = () => {
  const navigate=useNavigate()
 const signinbutton =()=>{
  navigate("/sign")
 }
  const [signin , setsignin] = useState(false)
  return (
    <div className='Login'>
     {/** Login Header */}
     
      <div>
      {/** Image */}
      <div className='LoginImage'>
        <img src={Logo} alt={Logo} width={150} height={60}/>
      </div>

      {/** Button */}
      <button className='LoginButton' onClick={()=> setsignin(true)}>Sign In</button>
      </div>

      <div className='LoginBody'>
        {signin ? <Sign/> :
        <>
        <div className='FirstText'>Unlimited movies , Tv Shows and more</div>
        <div className='SecondText'>Watch anywhere.Cancel anytime</div>
        <div className='ThirdText'>Ready to watch ? Enter Your email to create or restart your membership.</div>
        <div className=''>
          <input placeholder='Email address' className='Input' type="email"/>
          <button className='StartButton' onClick={signinbutton}  >Get Started</button>
        </div>
        </>
        }
        

      </div>

    </div>
  )
}

export default Login

//background image mai width aur height 100vh and vw hona zaroori hai warna image nahi aayi gee 
//button mai border none hona zaroori hai 
//login button or image ki agar position fixed karofay toh left and right daina 