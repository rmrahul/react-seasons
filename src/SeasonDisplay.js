
import React from 'react';
import './SeasonDisplay.css'

const seasonConfig =  {
    summer : {
        text : "Let's hit the sea",
        iconname : "massive sun icon"
    },
    winter : {
        text : "Burrr it's cold",
        iconname : "massive snowflake icon"
    }
}
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
    const {text, iconname} = seasonConfig[season];

    return (
        <div className={'season-display' + ' ' + season}>
            <i className={iconname + ' icon-left'}></i>
            <h1>
                {text}
            </h1>            
            <i className={iconname + ' icon-right'}></i>
        </div>
    )
}


export default SeasonDisplay;
