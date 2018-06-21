import React from "react";
import "./index.css";

export default class App extends React.Component {


    componentDidMount() {
        let markers = [];
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: { lat: 50.7934612, lng: -1.1098803 },
            zoom: 12,
            mapTypeId: "roadmap"
        });
        // Markers
        let locations = [
            {title: 'Spinnaker Tower', location: {lat: 50.7954961, lng: -1.1086307}},
            {title: 'HMS Warrior 1860', location: {lat: 50.7972356, lng: -1.1092372}},
            {title: 'Round Tower', location: {lat: 50.789984, lng: -1.1064873}},
            {title: 'Mary Rose Museum', location: {lat: 50.7973846, lng: -1.1104425}},
            {title: 'Action Stations', location: {lat: 50.7999168, lng: -1.1085142}},
            {title: 'Charles Dickens Birthplace Museum', location: {lat: 50.8054237, lng: -1.0912781}},
            {title: 'The D-Day Story', location: {lat: 50.7780965, lng: -1.0835397}},
            {title: 'Southsea Castle', location: {lat: 50.7792529, lng: -1.0926681}},
            {title: 'Royal Marines Museum', location: {lat: 50.7820239, lng: -1.0687221}},
            {title: 'The Royal Navy Submarine Museum', location: {lat: 50.7858205, lng: -1.1245246}}
        ];

        let largeInfoWindow = new window.google.maps.InfoWindow();
        let bounds = new window.google.maps.LatLngBounds();

        // Create an array of markers on initialise
        for (let i = 0; i < locations.length; i++) {
            let position = locations[i].location;
            let title = locations[i].title;
            // Create a location per marker
            let marker = new window.google.maps.Marker({
                map: map,
                position: position,
                title: title,
                animation: window.google.maps.Animation.DROP,
                id: i
            });
            // Push each marker to the markers array
            markers.push(marker);
            // Extend the boundaries of the map for the Markers
            bounds.extend(marker.position);
            // Create an onclick event for the infowindows
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfoWindow);
            });
            map.fitBounds(bounds);
        }
        // This function populates the infowindow when a marker is clicked
        function populateInfoWindow(marker, infowindow) {
            // Ensure that the infowindow is not already open on this marker
            if (infowindow.marker != marker) {
                infowindow.marker = marker;
                // InfoWindow content is specified here
                infowindow.setContent('<div>' + marker.title + '</div>');
                infowindow.open(map, marker);
                // Clear marker property if window is closed
                infowindow.addListener('closeclick', function() {
                    infowindow.setMarker(null);
                })
            }
        }
    }

    render() {
        return (
            <div id="app">
                <div id="map" />
            </div>
        );
    }
}
