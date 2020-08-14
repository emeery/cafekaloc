import React from "react";
import GoogleMapReact from "google-map-react";

const defaultProps = {
  center: {
    lat: 19.417417,
    lng: -99.103889,
  },
  zoom: 15,
};

const renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
    position: { lat: 19.417417, lng: -99.103889 },
    map,
    title: "Hello World!",
  });
  return marker;
};

const Map = () => {
  return (
    <div style={{ height: "20vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDGfedptVsc5x407jmpQ0K4YsvJDrk5VnQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
