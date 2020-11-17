import React from "react";


const getSeason=(lat, month) => {
  console.log(`lat=${lat}, month=${month}`);
  if(month >2 && month <9){
    return lat > 0 ? 'Summer': 'Winter';
  }
  else{
    console.log('HERE')
    return lat > 0 ? 'Winter' : 'Summer';
  }
}

  const SeasonDisplay = (props) =>{
    const season = getSeason(props.lat, new Date().getMonth());
    const message = season === 'Winter' ? 'Brrrr, its chillly': 'Lets hit the beach'
    return (
        <div data-automation='season'>
          <h2>{message}</h2>
        </div>
    );
  };

export default SeasonDisplay;
