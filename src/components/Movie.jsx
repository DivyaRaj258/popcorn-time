import "./Movie.css";

function Movie(props) {
    return (
        <section key={props.movieDetails.id} className="Movie">
            <h2>{props.movieDetails.title}</h2>

            {props.movieDetails.imgURL
                ? <img src={props.movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <h3>Rating: {props.movieDetails.rating}</h3>
            {props.movieDetails.rating > 8 && <p>RECOMMENDED</p>}

            <button onClick={() => {props.calbackTodelete(props.movieDetails.id) }}>Delete</button>
        </section>
    )
}

export default Movie;