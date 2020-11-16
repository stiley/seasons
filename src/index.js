import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{

    // not required by react - This is a JS object CTor
    constructor(props){
        super(props);
        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO OUR STATE!!!!
        this.state = {lat: null};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => console.log(err)
        );
    }

    // react requires we define render that returns JSK
    render(){
        return (
            <div>Latitude = {this.state.lat}</div>
        );
    }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);