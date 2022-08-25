
import React from "react";

const MovieDetails=(props)=>
{

  return(

          <>
            <img className="movieDisplayImage" src={props.movies.Poster} alt="Movie" />
            <div className="movieDetailsDesc">
              <h1>{props.movies.Title}</h1>
              <span className="rating">{props.movies.Rated}</span>
              <span className="movieDescLine1">{props.movies.Year}    .   </span>
              <span className="movieDescLine1">{props.movies.Genre}   .   </span>
              <span className="movieDescLine1">{props.movies.Runtime} .   </span>
              <span className="movieDescLine2">{props.movies.Actors}</span>
             </div>
            
            <span className="movieDescLine3">{props.movies.Plot}</span>
            
            <div className="Sourcerating">
              {props.movies.Ratings.map((rating,index)=>
              (   
                <span className="ratingDisplay">{rating.Value}<br/>
                  {rating.Source}
                 </span>    
              ) 
              )}
            </div>
          </>
)
}

export default MovieDetails;

