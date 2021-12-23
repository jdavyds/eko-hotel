import './gallery_page.css'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import All from '../all_gallery/all';
import Accom from '../accommodation/accomodation';
import GalDin from '../gallery_dining/gallery_dining';
import Amenities from '../amenities/amenities';
import MeetEvents from '../meetEvents/meetEvents';
import Videos from '../videos/videos';
import Cabana from '../cabana/cabana';
function GalleryPage() {
    const [ content, setContent ] = useState(<All />)
    const [active1, setActive1 ] = useState('active')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const [active4, setActive4 ] = useState('')
    const [active5, setActive5 ] = useState('')
    const [active6, setActive6 ] = useState('')
    const [active7, setActive7 ] = useState('')

    function handleAllContent() {
        setContent(<All />)
        setActive1('active')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
    }
    function handleAccContent() {
        setContent(<Accom />)
        setActive1('')
        setActive2('active')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
    }
    function handleDinContent() {
        setContent(<GalDin />)
        setActive1('')
        setActive2('')
        setActive3('active')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
    }
    function handleAmeContent() {
        setContent(<Amenities/>)
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('active')
        setActive5('')
        setActive6('')
        setActive7('')
    }
    function handleMeeContent() {
        setContent(<MeetEvents />)
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('active')
        setActive6('')
        setActive7('')
    }
    function handleVidContent() {
        setContent(<Videos />)
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('active')
        setActive7('')
    }
    function handleCabContent() {
        setContent(<Cabana />)
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('active')
    }
    return(
        <div className="gallery-page">
            <div className='cont'>
                <h1>OUR GALLERY</h1>
                <nav>
                    <Link to='/'>Home</Link> / Gallery 
                </nav>
            </div>
            <main>
            <p className='gallery-page-p'>
                <div className='gp-hdr'>
                <h1 className='brown'>Some shots of our beautiful hotel & features</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <nav className='navs'>
                <ul>
                <li className={active1} onClick={handleAllContent}>ALL</li>
                <li className={active2} onClick={handleAccContent}>ACCOMMODATION</li>
                <li className={active3} onClick={handleDinContent}>DINING</li>
                <li className={active4} onClick={handleAmeContent}>AMENITIES</li>
                <li className={active5} onClick={handleMeeContent}>MEETINGS & EVENTS</li>
                <li className={active6} onClick={handleVidContent}>VIDEOS</li>
                <li className={active7} onClick={handleCabContent}>CABANA</li>
                </ul>
            </nav>
            <section>
            <div className='img-gallery'>
            {content}
            </div>
            </section>
            </main>
        </div>
    )
}
export default GalleryPage;