
import React,{useState} from "react";
import MovieDetails from "./MovieDetails";
import {createRoot} from 'react-dom/client';
import Filter from "./Filter";


 const MovieList=(props)=>{
  var minRange,maxRange;
 
  
 
  //Function Detail - Load the movie details based on the user's selection
  
   const handleClick=(title,i,year)=>async()=>
     {
        var list;
  
        var url='http://www.omdbapi.com/?t='+title+'&y='+year+'&apikey=3f3a9c5b';
        const response=   await fetch(url);
        var responseJson =  await response.json();
       
        const rootElement = document.getElementById('moviedetails');
        const root =createRoot(rootElement)
        root.render(<MovieDetails movies={responseJson}/>)
       
        list=document.querySelectorAll('.movieItem');
        
        for(var j=0;j<list.length;j++)
        {
         list.item(j).className='movieItem'
        }
        document.getElementsByClassName('movieItem').item(i).className='movieItem selectedList'
        
     }

     
   props.movies.map((movie,index)=>
   {
  if(index==0)
 {
 minRange=props.movies[0].Year;
 maxRange=props.movies[0].Year
 }
 else{
   if(minRange>props.movies[index].Year)
   minRange=props.movies[index].Year
   if(maxRange<props.movies[index].Year)
   maxRange=props.movies[index].Year
 }


   }
   )
   
   
 const rootElement1= document.getElementById('filterContainer');
 const root1 =createRoot(rootElement1)
 root1.render(<Filter min={minRange} max={maxRange}></Filter>)


       return(
              <>
                {
                  props.movies.map((movie,index)=>
                  (
                    <>
                   
                    <div className="movieItem"  id={index}   onClick={handleClick(movie.Title,index,movie.Year)}>
                    <input  hidden className="movieType" value={movie.Type} id="movieType"/>
                    <img  className="movieImage" src={movie.Poster} alt="Movie"></img>
                    <span className="movieListTitle">
                    {movie.Title} 
                    </span>
                        <span className="movieListYear" id="movieListYear">
                    {movie.Year}  
                      </span>
                    </div>
                  </>
))}


</>
)
    
} 



export default MovieList;