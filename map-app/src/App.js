import React from 'react';
import './index.css';

export default class App extends React.Component {
  componentDidMount() {
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 50.7934612, lng: -1.1098803},
      zoom: 14,
      mapTypeId: 'roadmap',
    });
  }

  render() {
    return (
      <div id='app'>
        <div id='map' />
      </div>
    );
  }
};
