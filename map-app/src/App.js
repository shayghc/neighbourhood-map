import React from "react";
import "./index.css";
import SideNav from './SideNav'

export default class App extends React.Component {
    state = {
        locations: [
            {
                title: 'Spinnaker Tower',
                location: {
                    lat: 50.79557519999999,
                    lng: -1.1085171
                }
            }, {
                title: 'HMS Warrior 1860',
                location: {
                    lat: 50.7982384,
                    lng: -1.1092475
                }
            }, {
                title: 'Round Tower',
                location: {
                    lat: 50.7905406,
                    lng: -1.1088802
                }
            }, {
                title: 'Mary Rose Museum',
                location: {
                    lat: 50.8022114,
                    lng: -1.1088526
                }
            }, {
                title: 'Action Stations',
                location: {
                    lat: 50.79991680000001,
                    lng: -1.1070106
                }
            }, {
                title: 'Charles Dickens Birthplace Museum',
                location: {
                    lat: 50.8070676,
                    lng: -1.0872127
                }
            }, {
                title: 'The D-Day Story',
                location: {
                    lat: 50.77964100000001,
                    lng: -1.089412
                }
            }, {
                title: 'Southsea Castle',
                location: {
                    lat: 50.777995,
                    lng: -1.0888283
                }
            }, {
                title: 'Royal Marines Museum',
                location: {
                    lat: 50.78429,
                    lng: -1.053795
                }
            }, {
                title: 'The Royal Navy Submarine Museum',
                location: {
                    lat: 50.7881692,
                    lng: -1.1195995
                }
            }
        ],
        markers: [],
        sidebar: 'sidenav'
    }

    componentDidMount() {
        const {locations} = this.state
        const markersList = []
        // Generate map
        let map = new window.google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 50.7934612,
                lng: -1.1098803
            },
            zoom: 12,
            mapTypeId: "roadmap"
        });
        // Markers
        let largeInfoWindow = new window.google.maps.InfoWindow();
        let bounds = new window.google.maps.LatLngBounds();
        const labels = 'ABCDEFGHIJ'

        for (let i = 0; i < locations.length; i++) {
            let position = locations[i].location;
            let title = locations[i].title;
            // Create marker object
            let marker = new window.google.maps.Marker({
                map: map,
                position: position,
                title: title,
                icon: 'http://maps.google.com/mapfiles/marker' + labels[i] + '.png',
                animation: window.google.maps.Animation.DROP,
                id: title
            })
            // Push each marker to the markers array
            markersList.push(marker);
            // Extend the boundaries of the map for the Markers
            bounds.extend(marker.position);
            // Create an onclick event for the infowindows
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfoWindow);
                // Add double bounce when clicked
                this.setAnimation(window.google.maps.Animation.BOUNCE);
                setTimeout(function(){
                    marker.setAnimation(null);
                }, 1400);
            });
            this.setState({markers: markersList})
            map.fitBounds(bounds);
        }
        // This function populates the infowindow when a marker is clicked
        function populateInfoWindow(marker, infowindow) {
            // Ensure that the infowindow is not already open on this marker
            if (infowindow.marker !== marker) {
                infowindow.marker = marker;
                // InfoWindow content is specified here
                infowindow.setContent('<div>' + marker.title + '</div>');
                infowindow.open(map, marker);
                // Clear marker property if window is closed
                infowindow.addListener('closeclick', function() {
                    infowindow.close(); // setMarker(null) will not work here, causes a cors error
                })
            }
        }
    }

    sidebarVisibility() {
        let elementClass = (this.state.sidebar === 'sidenav') ? 'sidenav-active' : 'sidenav'
        this.setState({'sidebar': elementClass})
    }

    closeNav = () => {
        this.setState({sidebar: 'sidenav'})
    }

    render() {
        return (
            <div id="app">
                <header>
                    <span onClick={this.sidebarVisibility.bind(this)}>&#9776;</span>
                    <h1>Portsmouth POIs</h1>
                </header>
                <SideNav
                    className={this.state.sidebar}
                    close={this.closeNav}
                    locations={this.state.locations}
                />
                <div id="map" />
            </div>
        );
    }
}
