import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, PinDropRounded } from '@material-ui/icons';
import mapboxgl from 'mapbox-gl';
import './contact.css';

mapboxgl.accessToken = 'pk.eyJ1IjoiamRhdnlkeiIsImEiOiJja3ZxeHluN3YwMmsyMnZtOTE1YzZoNTBmIn0.Hi-m0jpy0FMXYvbnRe9_rQ';
function Contact() {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.430040);
    const [lat, setLat] = useState(6.427020);
    const [zoom, setZoom] = useState(9);
    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
        });
        });
    useEffect(() => {
            if (!map.current) return; // wait for map to initialize
            map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
        });
    return(
        <div
         className='contact'
        >
            <p className='contact-p'>
                <div className='contact-hdr'>
                <h1 className='blue'>CONTACT</h1>
                <h1 className='brown'>US</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <div ref={mapContainer} className="map-cont" />
            <main>
                <div className='left'>
                    <div className="contact-details">
                        <h4>INFORMATION</h4>
                        <p className="address">
                            <PinDropRounded id='contact-icon'/>
                            <section>
                            <h3>ADDRESS</h3>
                            Plot 1415 Adetokunbo Ademola Street, <br /> PMB 12724, Victoria Island,<br /> Lagos Nigeria  
                            </section>
                        </p>
                        <p className="phone">
                            <Phone id='contact-icon'/>
                            <section>
                            <h3>PHONE/FAX</h3>
                            +234 1 2772700-25 , +234 1 460610 <br /> (ext.6125, 6203, 6079, 6297, 6215, 6124)
                            </section>
                        </p>
                        <p className="email">
                            <Mail id='contact-icon'/>
                            <section>
                            <h3>E-MAIL</h3>
                            sales@ekohotels.com, <br /> reservation@ekohotels.com, <br /> banquet@ekohotels.com
                            </section>
                        </p>
                    </div>
                    <div className='contact-question'>
                    <p className='align-centre'>If you have any questions</p>
                     <p className='align-left'>
                    don't hesitate to contact us.
                    </p>
                    <p className="contact-que">
                        If you have any questions dont hesitate to contact us.
                    </p>
                    </div>
                </div>
                <div className='right'>
                    <form >
                        <h4>GET IN TOUCH</h4>
                        <input type="email" name="mail" placeholder='Enter your email address'/> 
                        <input type="text" name="name" placeholder='Enter your name' />
                        <textarea name="message" placeholder='Enter your message'></textarea>
                        <p>*All fields are mandatory</p>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
export default Contact;