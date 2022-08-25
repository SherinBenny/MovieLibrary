 
import React from "react";
import Header from "./Header"


const Movie=()=>
{
  
        return(
               <div className="container">
                 <Header/>
                 <div className="listContainer">
                    <div className="movieTotal" id="movieTotal"/>
                    <div className="movielist" id="movielist"/>
                 </div>
               <div className="moviedetails" id="moviedetails"/>
              </div>
      
            );

}
      


export default Movie;