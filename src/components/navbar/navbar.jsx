import React from "react";
import './navbar.css'
import logo from '../../assets/pngwing.com.png'
import searchIcon from '../../assets/search.png'
import Bellicon from '../../assets/bell.png'
import profile_icon from '../../assets/profile.png'
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { logout } from "../../firebase";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv shows </li>
          <li>Movies </li>
          <li>New & Popular </li>
          <li>My List </li>
          <li>Browse by Languages </li>
        </ul>
      </div>
      {/* <div className="navbar-right">
        <img src={searchIcon} alt="" className="icons" />
        <p>children</p>
        <img src={Bellicon} alt="" className="icons" />
        <div className="navbar-profile">
          <img src={profile_icon} alt="" className="profile"/>
           
        </div>
      </div>  */}
      <div className="navbar-right">
      {/* Search Icon (White) */}
      <FaSearch className="icons" />

      <p>Children</p>
 
      <FaBell className="icons" />

      <div className="navbar-profile">
        
        <FaUserCircle onClick={()=>logout()} className="profile" />
        <div className="dropdown">
            <p>Sighn out netflix </p>
        </div>
      </div>
     
    </div>
     
    </div>
  )
}

export default Navbar