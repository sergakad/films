import React, {useState,useEffect} from 'react';
import {Movies} from "../component/Movies";
import {Preloader} from "../component/Preloader";
import {Search} from "../component/Search";


function Main () {

    const[movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Harry Potter`)
            .then(res => res.json())
            .then(data => {setMovies(data.Search)})
            .then(data => {setLoading(false)})}, []);

    const searchMovies = (s, type) => {
        setLoading(true);
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${s}&type=${type}`)
            .then(res => res.json())
            .then(data => {setMovies(data.Search)})
            .then(data => {setLoading(false)})
    }


        return (
            <main className='container content'>
                <Search searchMovie = {searchMovies}/>
                {loading ?
                    (<Preloader/>) : <Movies movies={movies}></Movies>
                }

            </main>

        )

}

export {Main}