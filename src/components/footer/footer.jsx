import React from "react";
import './footer.css'
import youtube_icon from '../../assets/netflix_react_assets/assets/youtube_icon.png'
import twitter_icon from '../../assets/netflix_react_assets/assets/twitter_icon.png'
import instagram_icon from '../../assets/netflix_react_assets/assets/instagram_icon.png'
import facebook_icon from '../../assets/netflix_react_assets/assets/facebook_icon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-icons">
                <img src={youtube_icon} alt="" />
                <img src={instagram_icon} alt="" />
                <img src={facebook_icon} alt="" />
                <img src={twitter_icon} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relation</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notice </li>
                <li>Cookie Oreference  </li>
                <li>Corparate Informations </li>
                <li>Contact us</li>
            </ul>
            <p className="copyright-text"> 1234-231-32 @2024 pvt</p>
        </div>
    )
}


export default Footer