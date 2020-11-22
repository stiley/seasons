import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinnner";

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    getContentToRender() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if (this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        return <Spinner loadingMessage="Please allow location request in your browser"/>
    }
    // react requires we define render that returns JSK
    render() {
        return (
            this.getContentToRender()
        );
    }
    componentDidMount() {  // loading stuff should go here
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({errorMessage: err.message})
        );
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
);