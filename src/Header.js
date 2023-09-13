import React , {useState} from 'react'
import logo from "../src/image/logo.png"
import account from "../src/image/acc.png"
import "../src/style/Header.css"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  console.log(isScrolled)
//scrollY agar 0 kai baraber hai toh na challay
//scrolled ho toh classname scroll ho warna header
  return (
    <div className={isScrolled ?'scroll' :' header'}>
      <div className='Logo'>
        <img src={logo} alt={logo} width={60}/>
      </div>
      
      <div className='Account'>
        <img src={account} alt={account} width={60}/>
      </div>

    </div>
  )
}

export default Header