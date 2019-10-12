import React from 'react';
import './style.css';
import auto from './../../assets/auto-ricksaw.svg';
import ellipsis from './../../assets/ellipsis.svg';
import certified from './../../assets/certified.svg';
import moment from 'moment';

const Ride = ({data}) => {
    console.log(data)
    return (
        <div className="ride-wrapper">
            <img src={auto} className="auto" alt="auto" />
            <div className="ride-info-section">
                <div className="ride-info">
                    <div className="ride-date">{moment(data.date).format('LLLL')}</div>
                    <div>{`Auto CRN: ${data.CRN}`}</div>
                </div>
                
                <div className="location-info">
                    <img src={ellipsis} className="ellipsis" alt="dots" />
                    <div>
                        <p className="source">{data.source}</p>
                        <p className="destination">{data.destination}</p>
                    </div>
                </div>
            </div>

            <div className="ride-status">
                <img src={certified} className="status-img" alt="status" />
                <img src={data.driver_photo} className="status-img" alt="status" />
            </div>
        </div>
    );
}

export default Ride;