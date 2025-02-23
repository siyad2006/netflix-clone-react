import React, { useEffect, useState } from "react";
import './titlecards.css'
import cards_data from '../../assets/netflix_react_assets/assets/cards/Cards_data'
const TitleCards = ({ title, category }) => {

    const [apiData,setApiData]=useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzczYTlhYjA2YTZhOTZjYTQ1Zjg1MzZjNzI2NjAwNyIsIm5iZiI6MTc0MDIzODI1My4zNjgsInN1YiI6IjY3YjllZGFkNzIxOTY3NGM1YTQ2NWRkMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vTroaUwHgTAbcyA9pDJtemTvuxdpwd-1SRUL8k7Oe-U'
        }
    };

    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
            .then(res => res.json())
            .then(res => setApiData(res.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <div className="title-cards">
            <h2>{title ? title : <>Popular  on Netflix</>}</h2>
            <div className="card-list">
                {apiData.map((card, index) => {
                    return <div className="card" key={index}>
                        <img src={`https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default TitleCards