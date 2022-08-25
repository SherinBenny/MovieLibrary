import React, { useEffect } from "react";
import MovieApp from "./MovieApp";
import {createRoot} from 'react-dom/client';
import Filter from "./Filter";
var  searchTerm,searchType;
const Search=()=>
{
    var minRange='1890'
    var maxRange='2025'
    useEffect(()=>
    {
        searchResult();
    },[]);
 
 


    const handleKeypress = e => {

        if (e.code === "Enter") {
                searchResult();
      }
      };
      
//Functionality : Search based on user input 

function searchResult()
{

searchTerm= document.getElementById('searchBar').value



document.getElementById('defaultRangeFilter').checked=true;
 const type=document.querySelectorAll('[id^="typeFilter"]');
 for(var i=0;i<3;i++)
 type[i].checked=false
 
 const rootElement1 = document.getElementById('movielist');
 const root1 =createRoot(rootElement1)
 root1.render( <MovieApp movie={searchTerm} type={searchType} />)

 




}

  return(

          <>
          <div className="searchbar">
            <img src="/search.png" className="searchIcon" id="searchIcon" alt="icon" onClick={searchResult}/>
            <input type="text" className="searchBar" id="searchBar" name="searchBar" placeholder="Search" onKeyPress={handleKeypress} ></input>
           </div>
           <div className="filterContainer" id="filterContainer">
                  <Filter min={minRange} max={maxRange}></Filter>
            </div>
          </>
)
}

export default Search;

