import React, { useContext, useEffect } from "react";
import './home.css'
import herobanner from '../../assets/netflix_react_assets/assets/hero_banner.jpg'
import hero_title from '../../assets/netflix_react_assets/assets/hero_title.png'
import play_button from "../../assets/netflix_react_assets/assets/play_icon.png"
import info_icon from "../../assets/netflix_react_assets/assets/info_icon.png"
// import Nabar from '../../components/navbar/navbar'
import Navbar from "../../components/navbar/navbar";
import TitleCards from "../../components/titlecards/titlecards";
import Footer from '../../components/footer/footer'


import { MyContext } from "../../App";
import { useNavigate } from "react-router-dom";

const Home = () => {

    // const {loginAuth}=useContext(MyContext)
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     if(loginAuth){
    //         console.log('netered',loginAuth)

    //     }else{
    //         console.log('re-rendered to the login due to no login')
    //         navigate('/login')
    //     }
    // },[])

    return (
        <div className="home">
            <Navbar />
            <div className="hero">
                <img src={herobanner} alt="" className="banner-image" />
                <div className="hero-caption">
                    <img src={hero_title} alt="" className="caption-img" />
                    <p>this is the text for the moviw </p>
                    <div className="hero-btns">
                        <button className="btn">
                            <img src={play_button} alt="" />play
                        </button>
                        <button className="btn dark-btn">
                            <img src={info_icon} alt="" />more Info
                        </button>

                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title="Popular" category={"popular"}/>
                <TitleCards title="Top Rated" category={"top_rated"}/>
                <TitleCards title="Upcoming" category={"upcoming"} />
                {/* <TitleCards title="Action" /> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home;