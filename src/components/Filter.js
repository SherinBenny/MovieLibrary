import React, { useEffect,useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import { filterBasedOnType,filterBasedOnYear } from "./utils";

const Filter=(props)=>
{
    var filterResultYear=[];
    var filterResultType=[];
    const minYear=props.min;
    const maxYear=props.max;
         
    const [minValue, set_minValue] = useState(minYear);
    const [maxValue, set_maxValue] = useState(maxYear);
    
   
   // Functionality : Set min and max value of MultiRange Slider
   const handleRangeSlider = async(e) => 
   {
     set_minValue(e.minValue);
     set_maxValue(e.maxValue);
   
   };
   
   //Functionality : If option 'Any' Checked , then uncheck all type filters . Else uncheck 'Any' Filter
  
   const HandleTypeFilter = e =>
   {
     var id =e.currentTarget.id
     if(id!='defaultRangeFilter')
      document.getElementById('defaultRangeFilter').checked=false;
     else
      {
       const type=document.querySelectorAll('[id^="typeFilter"]');
       var noOfType=type.length;
       for(var i=0;i<noOfType;i++)
       type[i].checked=false
      }
     
   }
   
    
    
   
   
   
   //Functionality : Filter based on Type and Year . eg:Filter  based on condition : Year between :1050 to 1980 and Type :Series
   function filter(e)
   {
   
   
     for(var j=0;j<window.searchTotal;j++)
     {
     document.getElementById(j).style.display="none"
     } 
   
    if(String(e.currentTarget)=='[object HTMLInputElement]')
    {
     
      HandleTypeFilter(e)
    }
   
    else
    {
    
     handleRangeSlider(e)
    }
   
     
    filterResultType=filterBasedOnType();
    filterResultYear=filterBasedOnYear(e); 
 
   
   if(filterResultYear.length>0 && filterResultType.length>0)
   {
        const commonItem = filterResultType.filter(element => filterResultYear.includes(element));
       
        for(var i=0;i<commonItem.length;i++)   
         {
          
          document.getElementById(commonItem[i]).style.display="block"
         }
   
         document.getElementById('movieTotal').innerText=commonItem.length +" Results";   
   }
   
   else 
   {
   var noOfItem=0;
     if(String(e.currentTarget)=='[object HTMLInputElement]')
    {
     
     for(var i=0;i<filterResultType.length;i++)  
     document.getElementById(filterResultType[i]).style.display="block"
   
     noOfItem=filterResultType.length
    }
   
    else
    {
      for(var i=0;i<filterResultYear.length;i++)  
     document.getElementById(filterResultYear[i]).style.display="block"
   
     noOfItem=filterResultYear.length
    }
    
       
     
     document.getElementById('movieTotal').innerText=noOfItem+" Results";   
   }
   
   
   
   }
   
  
  return(

          <>
            <div className="year" id="year">
                      <span>Year</span>
                      <div className="yearFilter" id="yearFilter" >

                      <MultiRangeSlider  id="yearSlider" className="yearSlider" min={minYear} max={maxYear} 	step={10} 	ruler={false}  	
                            minValue={minValue}
                            maxValue={maxValue} 
                             onInput={filter}  /> 
                       </div>
                    </div>
                  
                    <div className="type">
                      <span>Type</span>
                      <input type="checkbox" className="typeFilter" name="defaultType" id="defaultRangeFilter"  onClick={filter}/>
                      <label for="rangeFilter1">Any</label> 
                      <input type="checkbox" className="typeFilter" name="movie" id="typeFilter1" onClick={filter}/>
                      <label for="rangeFilter2">Movies</label> 
                      <input type="checkbox" className="typeFilter" name="series" id="typeFilter2" onClick={filter}  />
                      <label for="rangeFilter3">Series</label> 
                      <input type="checkbox" className="typeFilter" name="episode" id="typeFilter3" onClick={filter}/>
                      <label for="rangeFilter4">Episodes</label> 
                    </div>

           
          </>
)
}

export default Filter;

