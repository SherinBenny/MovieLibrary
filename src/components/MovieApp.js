
import React,{useState,useEffect} from "react";
import MovieList from "./MovieList"
import MovieDetails from "./MovieDetails";
import {createRoot} from 'react-dom/client';



function MovieApp  (props)
{
  const baseUrl="http://www.omdbapi.com/?apikey=3f3a9c5b";
  const defaultMovie="Jungle Book"
  const [movies,setMovies]=useState([]);
  const [total,setTotal]=useState([]);
  const randomTitle=  ['spider man','Ice Age','Star wars','Bat Man','Avengers'];
  
  
  useEffect(()=>
  {
    fetchMovie();
  },[]);


  //Functionality :Fetch Data from OMDBI

  const  fetchMovie=async()=>
  {
   var url,defaultUrl,response,responseJson,imdbID;
   if(props.movie!='')
    {
      url=baseUrl+"&s="+props.movie;
    }
    else
    {
      url=baseUrl+"&s="+defaultMovie
    }
     
   response=await fetch(url+"&page=1");
   responseJson =await response.json();
  
   if(responseJson.Search)
   {   
    setMovies(responseJson.Search)
    setTotal(responseJson.totalResults)
    
    window.searchTotal=responseJson.totalResults;  
    imdbID=responseJson.Search.at(0).imdbID  
    
       
   
    for(var i=2;i<=window.searchTotal/10+1;i++)
     {
          response=await fetch(url+"&page="+i);
          const data =await response.json();
          
          if(data.Search)
          {
          setMovies(movies=>movies.concat(data.Search))
          }
         
       }
        document.getElementsByClassName('movieItem').item(0).className='movieItem selectedList'             
        defaultUrl=baseUrl+'&i='+imdbID;      
      }

      //If no result found then recommend some movies
   else
   {
 
   
     for(var  i=0;i<randomTitle.length;i++)
     {
      url=baseUrl+"&t="+randomTitle[i];
      response=await fetch(url);
      responseJson =await response.json();
      setMovies(movies=>movies.concat(responseJson))
      }
      
      window.searchTotal=randomTitle.length;
      defaultUrl=baseUrl+'&t='+randomTitle[0]; 
      setTotal(0)
   
   }
  
   
  // By Default,Display the details of the First movie in the list  

   response     =   await fetch(defaultUrl);
   responseJson =   await response.json();
  
   const rootElement = document.getElementById('moviedetails');
   const root =createRoot(rootElement)
   root.render(<MovieDetails movies={responseJson}/>)



  
};


if(total>0)
{
  document.getElementById('movieTotal').innerText=total +" Results";    
  
  return(
        <>
        <MovieList movies={movies} total={total} year={props.Year} />
        </>
        )
}

else
{
  document.getElementById('movieTotal').innerText="No results found "
  return(
          <>
          <span className="movieTotal">You May Like</span>
          <MovieList movies={movies} />
          </>
        )
}

}


export default   MovieApp;
