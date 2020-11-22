import './SeasonDisplay.css';
import React from "react";

const seasonConfig = {
    // where the namkes sun and snowflake come from https://semantic-ui.com/elements/icon.html#/icon
    summer: {
        text: "Let's hit the beach",
        iconName: "sun"
    },
    winter: {
        text: "Brrrr it is cold!!!!",
        iconName: 'snowflake'
    }
};

const getSeason=(lat, month) => {
  console.log(`lat=${lat}, month=${month}`);
  if(month >2 && month <9){
    return lat > 0 ? 'summer': 'winter';
  }
  else{
    return lat > 0 ? 'winter' : 'summer';
  }
}

  const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    //const season = getSeason(props.lat, 7);
    const {text, iconName} = seasonConfig[season];
    return (
        <div className={`season-display ${season} data-automation='season'`}>
          <i className={`icon-left massive ${iconName} icon`}/>
          <h2>{text}</h2>
          <i className={`icon-right massive ${iconName} icon `}/>
        </div>
    );
  };

export default SeasonDisplay;
