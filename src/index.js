import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {lat : null, error : ""};


       
    }

    componentDidMount(){
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

        if(this.state.error && !this.state.lat){
            return (
                <div>
                    Error : {this.state.error} 
                </div>
            )
        }

        if(!this.state.error && this.state.lat){
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat}>

                    </SeasonDisplay>
                </div>
            )
        }
       
        return <div>Loading!!</div>
    }
}

ReactDOM.render(
    <App></App>,
    document.querySelector("#root")
)