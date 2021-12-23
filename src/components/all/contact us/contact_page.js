import './contact_page.css'
import 'mapbox-gl/dist/mapbox-gl.css';
import React, { useRef, useEffect, useState } from 'react';
import { Mail, Phone, PinDropRounded } from '@material-ui/icons';
import mapboxgl from 'mapbox-gl';
import { Link } from 'react-router-dom'

mapboxgl.accessToken = 'pk.eyJ1IjoiamRhdnlkeiIsImEiOiJja3ZxeHluN3YwMmsyMnZtOTE1YzZoNTBmIn0.Hi-m0jpy0FMXYvbnRe9_rQ';
function ContactPage() {
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
        <div className='contact-page'>
            <div className='cont'>
                <h1>Contact Us</h1>
                <nav>
                    <Link to='/'>Home</Link> / Contact 
                </nav>
            </div>
            <h1 className='brown h1'>If you have any questions don't hesitate to contact us.</h1>
            <main>
                <div className='contact-form'>
                    <form >
                        <h4>GET IN TOUCH</h4>
                        <input type="email" name="mail" placeholder='Enter your email address'/> 
                        <input type="text" name="name" placeholder='Enter your name' />
                        <input type="text" name="subject" placeholder='Enter your subject' />
                        <textarea name="message" placeholder='Enter your message'></textarea>
                        <p>*All fields are mandatory</p>
                        <button>SEND MESSAGE</button>
                    </form>
                </div>
                <div className='contact-page-info'>
                    <div className="contact-page-details">
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
                </div>
            </main>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}
export default ContactPage;