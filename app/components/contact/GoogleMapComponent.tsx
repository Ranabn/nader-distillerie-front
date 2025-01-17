// @ts-nocheck

'use client';

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Text, useBreakpointValue } from '@chakra-ui/react';

const darkMapStyle = [
    {
        elementType: 'geometry',
        stylers: [{ color: '#242f3e' }]
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }]
    },
    {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }]
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#38414e' }]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#9ca5b3' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#515c6d' }]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#17263c' }]
    }
];

const GoogleMapComponent = ({ apiKey, center, zoom }) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: apiKey,
        libraries: ['places'],
    });

    const mapHeight = useBreakpointValue({ base: '195px', md: '420px' });

    if (!isLoaded) {
        return <Text>Loading Map...</Text>;
    }

    const sinElFilLocation = {
        lat: 33.8767,  // Approximate coordinates for Sin El Fil
        lng: 35.5431
    };

    const mapContainerStyle = {
        height: mapHeight,
        width: '100%',
    };

    const options = {
        styles: darkMapStyle,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
    };

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={zoom}
            options={options}
        >
            <Marker
                position={sinElFilLocation}
                title="Office Location"
                label={{
                    text: "Sin El Fil Office",
                    color: "white",
                    fontSize: "14px"
                }}
            />
        </GoogleMap>
    );
};

export default GoogleMapComponent;