import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    // react requires we define render that returns JSK
    render() {
        console.log("My component rendered")
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <div>loading user location...</div>
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }

    componentDidUpdate() {
        console.log("componentDidUpdate - Called")
    }



}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);