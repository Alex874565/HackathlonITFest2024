import '../stylesheets/Heatmap.css';
import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import $ from 'jquery';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader"


function Heatmap(props){
    let { username, email } = useParams();

    const googleMapsAPIKey = "AIzaSyCvwDVkVUtg3RMffu-AbpzgSKIELMXxHZI";
    const version = "weekly";

    let map, heatmap;

    function getData(email, keyword){
      var serializedData = `email=${email}&keyword=${keyword}`;
      $.ajax({
          url:"http://localhost/EasyParkTM/get_streets.php",
          type:"post",
          data: serializedData,
          success: (resp) => {
              console.log(resp);
          } 
      });
    }

  useEffect(() => getData());

  const loader = new Loader({
      apiKey: googleMapsAPIKey,
      version: version,
      libraries: ["visualization"],
    });
    
    loader.load().then(async () => {

      var heatMapData = [
        {location: new google.maps.LatLng(37.782, -122.447), weight: 0.5},
        new google.maps.LatLng(37.782, -122.445),
        {location: new google.maps.LatLng(37.782, -122.443), weight: 2},
        {location: new google.maps.LatLng(37.782, -122.441), weight: 3},
        {location: new google.maps.LatLng(37.782, -122.439), weight: 2},
        new google.maps.LatLng(37.782, -122.437),
        {location: new google.maps.LatLng(37.782, -122.435), weight: 0.5},
      
        {location: new google.maps.LatLng(37.785, -122.447), weight: 3},
        {location: new google.maps.LatLng(37.785, -122.445), weight: 2},
        new google.maps.LatLng(37.785, -122.443),
        {location: new google.maps.LatLng(37.785, -122.441), weight: 0.5},
        new google.maps.LatLng(37.785, -122.439),
        {location: new google.maps.LatLng(37.785, -122.437), weight: 2},
        {location: new google.maps.LatLng(37.785, -122.435), weight: 3}
      ];    

      const { Map } = await google.maps.importLibrary("maps");
    
      map = new Map(document.getElementById("map"), {
        center: { lat: 45.7537, lng: 21.2257 },
        zoom: 13.3,
      });

      heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData
      });
      heatmap.setMap(map);
    });

    return (
      <div className='heatmap-container'>
        {Navbar(username, email)}
        <div id="map"></div>
      </div>
    );
    
}

export default Heatmap