import '../stylesheets/Heatmap.css';
import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import $ from 'jquery';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from "@googlemaps/js-api-loader"


function Heatmap(props){
    let { email } = useParams();

    const googleMapsAPIKey = "AIzaSyCvwDVkVUtg3RMffu-AbpzgSKIELMXxHZI";
    const version = "weekly";

    let map, heatmap;

    function getData(){
      $.ajax({
          url:"http://localhost/EasyParkTM/backend/get_streets.php",
          type:"post",
          data: "",
          success: (resp) => {
            console.log('success');
            loadMap(resp); 
          } 
      });
    }

    async function processData(data){
      console.log('processData');
      var heatMapData = [];
      var lines = data.split("\n");
      var line_no;
      for(line_no = 0; line_no < lines.length - 1; line_no++){
        console.log(line_no);
        var line = lines[line_no].split("; ");
        var total_space = Number(line[1]);
        var occupied_space = Number(line[2]);
        var lat = parseFloat(line[3]);
        var lng = parseFloat(line[4]);
        var pt_weight = 400 - (total_space - occupied_space);
        heatMapData.push({location: new google.maps.LatLng(lat, lng), weight: pt_weight});
        /**var ne_lat = parseFloat(line[3]);
        var ne_lng = parseFloat(line[4]);
        var sw_lat = parseFloat(line[5]);
        var sw_lng = parseFloat(line[6]);
        var pt_weight = 300 - (total_space - occupied_space);
        var it_lat = sw_lat;
        var it_lng = sw_lng;
        var lat_growth = ((ne_lat - sw_lat)/(ne_lng - sw_lng))*0.0001;
        console.log(it_lat, it_lng, ne_lat, ne_lng, lat_growth);
        var counter
        heatMapData.push({location: new google.maps.LatLng((sw_lat+ne_lat)/2, (sw_lng + ne_lng)/2), weight: pt_weight});
        for(counter = 1, it_lng, it_lat;counter < 3, it_lng <= ne_lng, it_lat <= ne_lat;counter++, it_lat += lat_growth, it_lng += 0.0001){
          heatMapData.push({location: new google.maps.LatLng(it_lat, it_lng), weight: pt_weight});
        }*/
      }
      return heatMapData;
    }

  async function loadMap(data){
    console.log('loadMap');
    const loader = new Loader({
      apiKey: googleMapsAPIKey,
      version: version,
      libraries: ["visualization"],
    });
    
    loader.load().then( async () => {
      
      const { Map } = await google.maps.importLibrary("maps");

      var heatMapData = await processData(data)

      map = await new Map(document.getElementById("map"), {
        center: { lat: 45.7537, lng: 21.2257 },
        zoom: 13.3,
      });

      console.log('loadedMap');


      heatmap = await new google.maps.visualization.HeatmapLayer({
        data: heatMapData,
        maxIntensity: 400
      });
      heatmap.setMap(map);
      console.log('setHeatmap');
    });
  }
  
  useEffect(() => {console.log('1');getData()}, []);

  return (
    <div className='heatmap-container'>
      {Navbar(email)}
      <div id="map"></div>
    </div>
  );
    
}

export default Heatmap