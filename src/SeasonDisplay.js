
import React from 'react';


const getSeacon = (lat, month) =>{
    if(month > 2 && month < 9){
        return lat > 0 ? "summer" : "winter";
    }
    else{
        return lat > 0 ? "winter" : "summer";
    }
}
const SeasonDisplay = (props) => {

    const season = getSeacon(props.lat, new Date().getMonth());
    const icon = season === "winter" ? "snowflake icon" : "sun icon";

    return (
        <div>
            <i className={icon}></i>
            <h1>
                {season === "winter" ? "Burr, It's chilly" : "let's hit the sea!!!"}
            </h1>            
            <i className={icon}></i>
        </div>
    )
}


export default SeasonDisplay;
