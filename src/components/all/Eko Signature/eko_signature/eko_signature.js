import './eko_signature.css'
import { Link } from 'react-router-dom'
import signatureLogo from '../../../img/signature-logo.jpg'
import ESigCS from '../../../img/es-club-suite.jpg'
import ESigPS from '../../../img/es-premium-suite.jpg'
import ESigSS from '../../../img/es-signature-suite.jpg'
import ESigPresS from '../../../img/es-signature-presidential-suite.jpg'

function EkoSignature() {
    return(
        <div className='eko-signature'>
            <div className='cont'>
                <h1>EKO SIGNATURE</h1>
                <nav>
                    <Link to='/'>Home</Link> /
                    <Link to='/our-hotels'>Our Hotels</Link> / Eko Signature 
                </nav>
            </div>
            <main>
                <div className='logo-div'>
                <img src={signatureLogo} alt=""/>
                </div>
                <p className='signature-info'>Caring comes easily to those of us who are privileged to cater to you at Eko Signature. The vibrant colours of the furnishing indulges you. Our suites embody elegance that expresses the art of simple luxury; one whose soft warm embrace can’t wait to relax you. With a bold contemporary style, the rooms are tastefully designed with the professional executive in mind.</p>
                <p className='num-of-rooms'>
                    <strong>Overview : 171 Suites</strong>
                    <ul>
                        <li> 146 Club Suite</li>
                        <li>9 Premium Suite</li>
                        <li>15 Signature Suites</li>
                        <li>1 Presidential Suite</li>
                    </ul>
                </p>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESigCS} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Club Suite</h4>
                        <p>The smallest of the suites at Eko Signature but by no means the least. The suite has views of both the Atlantic and the city of Lagos, minibar, a lounge for visitors, king sized beds, nespresso machines, Internet protocol TVs, bath tub and separate walk-in shower, complimentary internet and breakfast.</p>
                        <nav>
                            <span>ROOM: 40.44 M2</span>
                            <span>BATHROOM: 10.11 M2</span> 
                        </nav>
                        <button>
                            <Link to='/club-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESigPS} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Premium Suite</h4>
                        <p>Offers all the trims of the club suite but with a separate lounge and guest toilet. Rooms have 2 Internet Protocol Tvs, with an automatic climate controlled air conditioning.</p>
                        <nav>
                            <span>ROOM+Lounge: 59.76 M2</span>
                            <span>BATHROOM: 8.51 M2</span> 
                        </nav>
                        <nav>
                            <span>GUEST TOILET – 2.31 M2</span>
                            <span>LCD TV</span>
                        </nav>
                        <button>
                            <Link to='/premium-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESigSS} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Signature Suites</h4>
                        <p>Signature Suites feature a lounge for visitors, 2 Internet Protocol TVs, a nespresso machine, automated minibar, a toilet for guests, walk-in power shower with separate bath tub and a butler service on request.</p>
                        <nav>
                            <span>ROOM+LOUNGE: 80.48 M2</span>
                            <span>BATHROOM: 9.44 M2</span>
                        </nav>
                        <nav>
                            <span>GUEST TOILET: 2.19 M2</span>
                            <span>LCD TV</span> 
                        </nav>
                        <button>
                            <Link to='/signature-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESigPresS} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Presidential Suites</h4>
                        <p>For luxury redefined, the Signature Presidential Suite offers that and much more. With a foyer, 2 separate lounges, a dining area, library, kitchenette, 2 guest toilets, a Jacuzzi, walk-in shower, 2 LED TVs, one Hi-DEF 96” LED Screen.</p>
                        <nav>
                            <span>LOBBY: 2.052 M2</span> 
                            <span>TOILET(SECURITY): 2.712 M2</span>
                        </nav>
                        <nav>
                            <span>BEDROOM + BATHROOM: 70.632 M2</span>
                            <span>GUEST TOILET: 2.73 M2</span>
                        </nav>
                        <button>
                            <Link to='/signature-presidential-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
        </div>

    )
}
export default EkoSignature;