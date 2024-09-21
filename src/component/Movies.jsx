import {Movie} from "./Movie";

function Movies(props) {

    return <div className='movies'>
        {props.movies ? props.movies.map(movie => {
        return <Movie
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            type={movie.Type}
        />
    }
    ): <h4>Oops! Nothing found...</h4>}</div>
}

export {Movies}