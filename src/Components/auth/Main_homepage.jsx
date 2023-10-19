import React from 'react'
import './main_homepage.css'

import Home_page_image from '../assests/Home_page_image.jpg'

const Main_homepage = () => {
  return (
    <>
    <nav className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item">
        <a className="nav_bar_item1" href="./signUp">Sign Up</a>
      </li>
      <li className="navbar-item"> 
        <a className="nav_bar_item2" href="./SignIn">Sign In</a>
      </li>
    </ul>
  </nav>
  <div className="container_home_page_2">
    <img className="image_of_homepage" src={Home_page_image} alt="" />
    <div className="tl">Learning <br /> Through <br /> Play</div>
    <div className="tr">Learning through play is a effective <br /> way for kids to acquire knowledge <br /> Game provides a unique <br /> learning experience <br /> that makes children intellectual. <br /> This game involves kids to <br /> solve various puzzles.</div>
    <div className="trb">
        <a href="./signIn"> <button className="getstartedbutton">  Get Started</button></a>
    </div>
  </div>
  </>
  )
}

export default Main_homepage