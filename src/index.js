import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component{

    // not required by react - This is a JS object CTor
    constructor(props){
        // must call the parent CTOR
        super(props);
        // THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO OUR STATE!!!!
        this.state = {lat: null, errorMessage: ''};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) =>  {
                console.log(err)
                this.setState({errorMessage: err.message})
        }
        );
    }
    // react requires we define render that returns JSK
    render(){
        if(this.state.errorMessage && !this.state.lat){
             return <div>Error: {this.state.errorMessage}</div>
        }
        if(this.state.lat && !this.state.errorMessage){
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>loading user location...</div>
    }
}

ReactDOM.render(
  <App />,
  document.querySelector("#root")
);