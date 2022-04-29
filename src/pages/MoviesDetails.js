import styles from "./MoviesDetails.module.css"
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClients";
import { Spinner } from "../components/Spinner"


export function MovieDetails() {

    const { movieId } = useParams();
    const [ isLoading, setIsLoading ] = useState(true);
    const [ movie, setMovie ] = useState(null)


    useEffect(() => {
        setIsLoading(true);
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
            setIsLoading(false)
        });
    }, [movieId]);

    if(isLoading){
        return <Spinner />
    }

    if(!movie){
        return null;
    }

    const imagenUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return <div className={styles.detailsConteiner} >  
        <img className={`${styles.col} ${styles.movieImage}`} src= {imagenUrl} alt={movie.title} />
        <div className={`${styles.col} ${styles.movieDetails}`} >
            <p>
                <strong>Title: </strong> {movie.title}
            </p>
            <p>
              <strong>Genres: </strong>  {movie.genres.map(genre => genre.name).join(", ")}
            </p>
            <p>
                <strong>Description: </strong>{movie.overview} 
            </p>
        </div>
    </div>
} 