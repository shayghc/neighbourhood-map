import React from 'react'

function initMap() {
    //Constructor creates a new map - only centre and zoom are required
    map = new google.maps.Map(document.querySelector('map'), {
        center: {lat: 50.7945389, lng: -1.1095824},
        zoom: 12
    }
}

class DisplayMap extends React.Component {
    render() {
        let map;
        return(
            <div className="map">
                {this.initMap()}
            </div>
        )
    }
}

export default DisplayMap
