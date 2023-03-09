
import "../components/movie.css"
const Movie = (props) => {
  return (
    <div className="movie">
      <img  src ={props.img} alt="" />
      <p>Movie Name :{props.title}</p>
      <p> Year :{props.year}</p>
    </div>
  )
}

export default Movie
