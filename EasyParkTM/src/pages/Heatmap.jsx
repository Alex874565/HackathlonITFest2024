import React, { useEffect } from 'react';
import '../stylesheets/Heatmap.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader"

function Heatmap(){
    const googleMapsAPIKey = "AIzaSyCvwDVkVUtg3RMffu-AbpzgSKIELMXxHZI";
    const version = "weekly";

    let map;

    const loader = new Loader({
        apiKey: googleMapsAPIKey,
        version: version,
      });
      
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
      
        map = new Map(document.getElementById("map"), {
          center: { lat: 45.7537, lng: 21.2257 },
          zoom: 13.3,
        });
      });

    return (
        <div id = "map"></div>
    )
}

export default Heatmap