import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {lat : null, error : ""};


        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat : position.coords.latitude})
            },
            (error) => {
                this.setState({error : error.message})
            },
        )
    }
    
    render() {
       

        return (
            <div>
                lat : {this.state.lat}
                <br>
                </br>
                Error : {this.state.error}
            </div>
        )
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector("#root")
)