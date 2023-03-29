import React, { useState } from 'react';
import { Form, Input, Card, Button } from 'antd';
import GooglePlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-google-places-autocomplete';

const Settings = () => {
    const [address, setAddress] = useState(null);
    const [coordinates, setCoordinates] = useState(null);
    
    const getAddressLatLng = async (address) => {
        setAddress(address);
        const geocodeByAddress = await geocodeByAddress(address.label);
        const latLng = await getLatLng(geocodeByAddress[0]);
        setCoordinates(latLng);
    };

    return (
        <Card title="Restaurant Details" styles={{ margin: 20 }}>
            <Form layout='vertical' wrapperCol={{ span: 8 }}>
                <Form.Item label="Restaurant Name" required>
                    <Input placeholder='Enter restaurant name here'/>
                </Form.Item>
                <Form.Item label="Restaurant Address" required>
                    <GooglePlacesAutocomplete
                     apiKey="AIzaSyDNh78pRbkyTR4k34mx56lS855HfHl8CgU" 
                    selectProps={{
                        value: address,
                        onChange: getAddressLatLng,
                    }}/>
                </Form.Item>
                <Form.Item>
                    <Button type='primary'>Submit</Button>
                </Form.Item>
            </Form>
            <span>{coordinates?.lat} - {coordinates?.lng}</span>
        </Card>
    )
};

export default Settings;