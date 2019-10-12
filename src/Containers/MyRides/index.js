import React from 'react';
import './style.css';
import Header from './../../Components/Header';
import Ride from './../../Components/Ride';

class MyRides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rides: [],
        }
    }

    componentDidMount() {
        let url = 'https://my-json-server.typicode.com/GoKartheek/ola_getData/rides';
        fetch(url)
            .then((resp) => resp.json())
            .then(rides => {
                this.setState({
                    rides
                })
            })
    }

    render() {
        let { rides } = this.state;
        console.log(rides)
        return(
            <div className="my-rides-wrapper">
                <Header />
                {
                    rides && (rides.length > 0) && rides.map((ride, index) => {
                        return(
                            <Ride data={ride} key={`ride-${index}`}/>
                        );
                    })
                }                
            </div>
        );
    }
}

export default MyRides;