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

    return (
      <div className='nameBody'>
        {Navbar(username, email)}
        <div id = "map"></div>
      </div>
    )
}

export default Heatmap