import React from "react";
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header-icon" src="https://thumbs.dreamstime.com/z/movie-icon-film-flap-sticker-dark-background-movie-icon-film-flap-sticker-dark-background-simple-vector-icon-117431578.jpg" /></Link>
                <Link to="/movies/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header