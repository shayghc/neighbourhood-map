import React from "react";
import "./index.css";

export default class App extends React.Component {
    componentDidMount() {
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 50.7934612, lng: -1.1098803 },
            zoom: 14,
            mapTypeId: "roadmap"
        });
        // Markers
        let spinnaker = { lat: 50.7956376, lng: -1.1085203 };
        // Note the use of window here. This is necessary in React
        let marker = new window.google.maps.Marker({
            position: spinnaker,
            map: map,
            draggable: true,
            title: 'Spinnaker Tower'
        })
        let infowindow = new window.google.maps.InfoWindow({
            content: 'Spinnaker Tower in Gunwharf Quays'
        })
        marker.addListener('click', function() {
            infowindow.open(map, marker);
        })
    }

    render() {
        return (
            <div id="app">
                <div id="map" />
            </div>
        );
    }
}
