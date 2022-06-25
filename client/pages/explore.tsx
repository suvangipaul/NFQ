import React, {useMemo} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Colorpartion from "../components/colorpartition/colorpartion.components";


const Explore = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map_section">
      <Map />
      <Colorpartion/>
    </div>
  );
};


const Map = () => {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Explore;
