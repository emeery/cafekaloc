import React from "react";
import GoogleMapReact from "google-map-react";

  const renderMarkers = (map, maps, pos) => {
  let marker = new maps.Marker({
    position: { lat: pos.lat, lng: pos.lng },
    map,
    title: "Hello World!",
  });
  return marker;
};

const Map = (props) => {
  console.log( process.env.REACT_APP_API_KEY); //
  return (
    <div style={{ height: "25vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={props.position}
        defaultZoom={props.position.zoom}
        onGoogleApiLoaded={({ map, maps}) => renderMarkers(map, maps, props.position)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
