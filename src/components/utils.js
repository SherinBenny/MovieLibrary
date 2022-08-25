export const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );
 
  export function filterBasedOnType()
  { 
    var filterResultType=[];
    var noOfMovies=window.searchTotal
    var movieType;
    const type=document.querySelectorAll('[id^="typeFilter"]');
  
    if(document.getElementById('defaultRangeFilter').checked)
    {
     for(var j=0;j<window.searchTotal;j++)
      {
       filterResultType.push(j);
      }
    }
    
    else
    {
      for(var i=0;i<3;i++)
      {
         
        if (type[i].checked)
         {
           for(var j=0;j<noOfMovies;j++)
            {   
              movieType=document.getElementById(j).querySelector('.movieType').value
  
              if(movieType.includes(type[i].name))
              {
                filterResultType.push(j);
                            
              }
            }
      }
     
   }
  
   }
   return filterResultType;
  
  }


 export function filterBasedOnYear (e)
    {
        var filterResultYear=[];
        var year;
     
     filterResultYear=[];
     var noOfMovies=window.searchTotal
     var totalResult=0;
   
   
     for(var i=0;i<noOfMovies;i++)
     {
      year= document.getElementById(i).querySelector('.movieListYear').innerHTML
      if(year.indexOf('–')>0)
      {
       year=year.split('–');
       year[0]=year[0].replace('–','')
       year[1]=year[1]
       
       if((year[0]>=e.minValue && year[0]<=e.maxValue) || (year[1]>=e.minValue && year[1]<=e.maxValue ) )
        {
         
         filterResultYear.push(i);
         totalResult++;
        }
      }    
      else 
       {
        if(year>=e.minValue && year<=e.maxValue)
         {
          year=year.split('-');
          filterResultYear.push(i);
          totalResult++;
          }
       }
      }
   
     document.getElementById('movieTotal').innerText=totalResult +" Results";    
     return filterResultYear;
    
   };
    
    
   
       