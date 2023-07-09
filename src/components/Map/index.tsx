import { GoogleMap, MarkerF, useLoadScript, Autocomplete } from '@react-google-maps/api';
import { useState } from 'react';
import { Input } from 'antd'
import { useAppDispatch, useAppSelector } from '@hooks/redux'
import { setCenter, setZoom, setHistories } from '@redux/slicers/mapSlice';
import { libraries } from '@constants/map';

const Map = () => {
    const [autoComplete, setAutoComplete] = useState<google.maps.places.Autocomplete>()
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY ?? '',
        libraries
    });

    const center = useAppSelector((state) => state.map.center);
    const zoom = useAppSelector((state) => state.map.zoom);
    const dispatch = useAppDispatch()

    
    const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
        setAutoComplete(autocomplete)
    }


    const onPlaceChanged = () => {
        let lat = autoComplete?.getPlace()?.geometry?.location?.lat()
        let lng = autoComplete?.getPlace()?.geometry?.location?.lng()
        let name = autoComplete?.getPlace().name

        if(lat && lng && name) {
            let center = {
                lat,
                lng
            }
            dispatch(setHistories({
                name,
                center
            }))
            dispatch(setCenter(center))
            dispatch(setZoom(16))
        }
    }

    if(!isLoaded) {
        return null
    }

    return (
        <GoogleMap
            center={center}
            zoom={zoom}
            options={{
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
            }}
            mapContainerStyle={{
                height: '99vh',
                width: '100vh',
                position: 'relative'
            }}
        >
            <Autocomplete
                onLoad={onLoad}
                onPlaceChanged={onPlaceChanged}
            >
                <Input placeholder="Search Place"/>
            </Autocomplete>
            <MarkerF
                position={center}
                icon={"http://maps.google.com/mapfiles/ms/icons/green-dot.png"}
            />
        </GoogleMap>
    );
}

export default Map