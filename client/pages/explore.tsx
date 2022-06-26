import React, {useEffect, useMemo, useState} from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Colorpartion from "../components/colorpartition/colorpartion.components";
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useUser } from '@auth0/nextjs-auth0'
import axios from "../config/axios";

interface IUserlist {
  email: string,
  first_name: string,
  last_name: string,
  lat: number,
  lng: number
}
const Explore = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div className="map_section">
      <Map />
      <div className="margin-top">
        <Colorpartion/>
      </div>
    </div>
  );
};


const Map = () => {
  const [ userlist, setUserlist] = useState<IUserlist[]>([])
  const [ latitude, setLatitude ] = useState(null)
  const [ longitude, setLongitude ] = useState(null)

  const { user } = useUser()

  useEffect(() => {
    axios.get('/users/all')
    .then((res) => setUserlist(res.data))
    .catch((err) => console.error(err))
  }, [user])


  const successCallback = (position: any) => {
    setLatitude(position.coords.latitude)
    setLongitude(position.coords.longitude)

  }
  const errorCallback = (position: any) => {
    console.log(position)
  }

  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)

  const AddLocation = async () => {
    const res = await axios.post('/users/create', {
      email: user?.email,
      first_name: user?.name,
      last_name: user?.nickname,
      lat: latitude,
      lng: longitude
    })
    axios.get('/users/all')
    .then((res) => setUserlist(res.data))
    .catch((err) => console.error(err))
    console.log(res.data)
  }



  console.log(userlist)
  const center = useMemo(() => ({ lat:  20.344881, lng:  85.8208954 }), []);
  return (
    <>
      <GoogleMap
        zoom={5}
        center={center}
        mapContainerClassName="map-container"
      >
        {userlist.map((usersloc, key) =>( <Marker key={key} position={{ lat: usersloc.lat, lng: usersloc.lng }}/> ))}
      </GoogleMap>
      <button onClick={AddLocation} className="add-me">ADD MY LOCATION</button>    
    </>
  );
};

export default withPageAuthRequired(Explore, {
  onRedirecting: () => <div>Loading...</div>,
  onError: error => <p>{error.message}</p>
});