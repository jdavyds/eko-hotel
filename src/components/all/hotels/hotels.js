import { useState } from 'react'
import './hotels.css'
import { Link } from 'react-router-dom'
import gardens from '../../img/eko-gardens.jpg'
import hotels from '../../img/eko-hotel.jpg'
import suites from '../../img/eko-suites.jpg'
import signature from '../../img/eko-signature.jpg'
function Hotels() {
    const [ gardenHover, setGardenHover ] = useState(true)
    const [ suiteHover, setSuiteHover ] = useState(true)
    const [ signatureHover, setSignatureHover ] = useState(true)
    const [ hotelHover, setHotelHover ] = useState(true)
    return(
        <div className='hotels'>
            <p className='htl-p'>
                <div className='htl-hdr'>
                <h1 className='blue'>OUR</h1>
                <h1 className='brown'>HOTELS</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className='rooms'>
                <figure className={gardenHover ? 'room' : 'room hover'} onMouseEnter={() =>  setGardenHover(!gardenHover)} onMouseLeave={() => setGardenHover(!gardenHover)}>
                    <img src={gardens} alt="Gardens" />
                    <figcaption className='caption'>
                        <h2>Eko Gardens</h2>
                        <p>At Eko Gardens, the rooms are well appointed and designed to provide comfort and convenience.</p>
                        <Link exact to='/eko-gardens'>VIEW MORE <span> &gt;&gt; </span> </Link>
                    </figcaption>
                </figure>
                <figure className={hotelHover ? 'room' : 'room hover'} onMouseEnter={() =>  setHotelHover(!hotelHover)} onMouseLeave={() => setHotelHover(!hotelHover)}>
                    <img src={hotels} alt="Gardens" />
                    <figcaption className='caption'>
                        <h2>Eko Hotels</h2>
                        <p>Eko Hotel rooms and suites are decorated and designed for your comfort and relaxation.</p>
                        <Link exact to='/eko-hotels'>VIEW MORE <span>&gt;&gt;</span> </Link>
                    </figcaption>
                </figure>
                <figure className={suiteHover ? 'room' : 'room hover'} onMouseEnter={() =>  setSuiteHover(!suiteHover)} onMouseLeave={() => setSuiteHover(!suiteHover)}>
                    <img src={suites} alt="Gardens" />
                    <figcaption className='caption'>
                        <h2>Eko Suites</h2>
                        <p>Eko Suites is tucked in the most discreet part of the property with 88 large suites. The property offers a peaceful, quiet and relaxing ambience.</p>
                        <Link exact to='/eko-suites'>VIEW MORE <span>&gt;&gt;</span> </Link>
                    </figcaption>
                </figure>
                <figure className={signatureHover ? 'room' : 'room hover'} onMouseEnter={() =>  setSignatureHover(!signatureHover)} onMouseLeave={() => setSignatureHover(!signatureHover)}>
                    <img src={signature} alt="Gardens" />
                    <figcaption className='caption'>
                        <h2>Eko Signature</h2>
                        <p>Caring comes easily to those of us who are privileged to cater to you at Eko Signature. The vibrant colours of the furnishing indulges you</p>
                        <Link exact to='/eko-signature'>VIEW MORE <span> &gt;&gt;</span> </Link>
                    </figcaption>
                </figure>
            </section>
            <button>
                <Link exact to='/our-hotels' >
                VIEW ALL HOTELS
                </Link>
            </button>
        </div>
    )
}
export default  Hotels;