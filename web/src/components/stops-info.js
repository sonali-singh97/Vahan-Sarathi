import React from "react";

const Marker = ({data}) => {
  
  

    return (
      <div  className="stops-info">
        <div>
          {data.name} 
     
        </div>
        {/* <img  src={info.image} /> */}
      </div>
    );
  
}

export default Marker;