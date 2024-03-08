import React, { useEffect } from 'react';
import '../stylesheets/Heatmap.css';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function Heatmap(){

    let map;

    async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
    }

    return (
        initMap()   
    )
}

export default Heatmap