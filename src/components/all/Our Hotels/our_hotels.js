import './our_hotels.css'
import { Link } from 'react-router-dom'
import ekoHotel from '../../img/eh-presidential-suites.jpg'
import ekoSuites from '../../img/esu-studio-suite.jpg'
import ekoSignature from '../../img/hotel-eko-signature.jpg'
import ekoGardens from '../../img/eg-superior-room-2.jpg'

function OurHotels() {
    return(
        <div className="our-hotels">
            <div className='cont'>
                <h1>OUR HOTELS</h1>
                <nav>
                    <Link to='/'>Home</Link> / Our Hotels
                </nav>
            </div>
            <main>
                <div className="our-hotel">
                    <div className="hotel-img">
                        <img src={ekoHotel} alt="" />
                    </div>
                    <div className='hotel-info'>
                        <h4>Eko Hotel</h4>
                        <p>Eko Hotel rooms and suites are decorated and designed for your comfort and relaxation. All the rooms have large balconies and beautiful views of either the city or the Atlantic Ocean; our friendly and professional staff are always a phone call away to assist you with anything you may need.</p>
                        <button>
                            <Link to='/eko-hotels'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="our-hotel">
                    <div className='hotel-info'>
                        <h4>Eko Suites</h4>
                        <p>Eko Suites is tucked in the most discreet part of the property with 88 large suites. The property offers a peaceful, quiet and relaxing ambience. All the suites have King size beds, a safety deposit box, a hairdryer, a mini bar with a working desk and most suites have a kitchenette.</p>
                        <button>
                            <Link to='/eko-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                    <div className="hotel-img">
                        <img src={ekoSuites} alt="" />
                    </div>
                </div>
                <div className="our-hotel">
                    <div className="hotel-img">
                        <img src={ekoSignature} alt="" />
                    </div>
                    <div className='hotel-info'>
                        <h4>Eko Signature</h4>
                        <p>Caring comes easily to those of us who are privileged to cater to you at Eko Signature. The vibrant colours of the furnishing indulges you. Our suites embody elegance that expresses the art of simple luxury; one whose soft warm embrace can’t wait to relax you. With a bold contemporary style, the rooms are tastefully designed with the professional executive in mind.</p>
                        <button>
                            <Link to='/eko-signature'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="our-hotel">
                    <div className='hotel-info'>
                        <h4>Eko Gardens</h4>
                        <p>At Eko Gardens, the rooms are well appointed and designed to provide comfort and convenience. Besides the usual amenities such as central air conditioning, satellite TV, fast internet connection, a fridge and bathroom amenities of the highest quality, the guests can also have fast internet access in all the public areas through our WiFI (Wireless) network.</p>
                        <button>
                            <Link to='/eko-gardens'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                    <div className="hotel-img">
                        <img src={ekoGardens} alt="" />
                    </div>
                </div>
            </main>
        </div>
    )
}
export default OurHotels;