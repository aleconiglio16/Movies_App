import React from "react";
import { Link } from "react-router-dom";
import style from "./MovieCard.module.css"


export function MovieCard ({movie}) {

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <li className={style.movieCard}> 
            <Link to={"/movies/" + movie.id}>
                <img 
                  width={230}
                  heigth={345}
                  src = {imagenUrl} 
                  alt= {movie.title} 
                  className= {style.movieImage} 
            />
                <div>{movie.title}</div>   
            </Link>
      
        </li>
        )

}

