import React, { useEffect, useState } from "react";
import style from "../components/MoviesGrid.module.css"
import { MovieCard } from "../components/MovieCard";
import { get } from "../utils/httpClients";
import { Spinner } from "./Spinner";
import { useQuery } from "../hooks/useQuery";




export function MoviesGrid () {
     
    const [movies, setMovies] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)

    const query = useQuery();
    const search = query.get("search")

    useEffect(() => {
        setIsLoading(true)
        const searchUrl = search 
        ? "/search/movie?query=" + search
        : "/discover/movie"; 
        get(searchUrl).then((data) => {
            setMovies(data.results);
            setIsLoading(false)
        });
    }, [search]);


    if(isLoading) {
        return <Spinner />
    }

    return(
        <ul className = {style.moviesGrid}>
            {movies.map((movie) => 
                <MovieCard key={movie.id} movie = {movie} />
            )}    
        </ul>
    )
}

