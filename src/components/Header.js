
import React from "react";
import Search from "./search";


 const Header=()=>
 {
  const defaultMovie="Jungle Book"
         return(
 
          <div className="header"> 
             <header>
                <div className="headerContainer">
                      <Search searchTerm={defaultMovie}></Search>
                                                  
                 
                </div>
             </header>
       
          </div>
        );


}

export default Header;