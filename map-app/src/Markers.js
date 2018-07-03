import React from 'react'

class Markers extends React.Component {

    // Generate markers
    let largeInfoWindow = new window.google.maps.InfoWindow();
    let bounds = new window.google.maps.LatLngBounds();
    const labels = "ABCDEFGHIJ";

    for (let i = 0; i < locations.length; i++) {
        let position = locations[i].location;
        let title = locations[i].title;
        // Create marker object
        let marker = new window.google.maps.Marker({
            map: map,
            position: position,
            title: title,
            icon:
                "http://maps.google.com/mapfiles/marker" +
                labels[i] +
                ".png",
            animation: window.google.maps.Animation.DROP,
            id: labels[i]
        });
        // Push each marker to the markers array
        markersList.push(marker);
        // Extend the boundaries of the map for the Markers
        bounds.extend(marker.position);
        // Create an onclick event for the infowindows
        marker.addListener("click", function() {
            populateInfoWindow(this, largeInfoWindow);
            // Add double bounce when clicked
            this.setAnimation(window.google.maps.Animation.BOUNCE);
            setTimeout(function() {
                marker.setAnimation(null);
            }, 1400);
        });
        this.setState({ markers: markersList });
        map.fitBounds(bounds);
    }
    // This function populates the infowindow when a marker is clicked
    function populateInfoWindow(marker, infowindow) {
        // Ensure that the infowindow is not already open on this marker
        if (infowindow.marker !== marker) {
            infowindow.marker = marker;
            // InfoWindow content is specified here
            infowindow.setContent("<div>" + marker.title + "</div>");
            infowindow.open(map, marker);
            // Clear marker property if window is closed
            infowindow.addListener("closeclick", function() {
                infowindow.close(); // setMarker(null) will not work here, causes a cors error
            });
        }
    }

    render() {
        return(

        )
    }
}

export default Markers
