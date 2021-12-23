import './eko_suites.css'
import ESDeluxe from '../../../img/esu-deluxe-room.jpg'
import ESStudio from '../../../img/esu-studio-suite.jpg'
import ESExectutive from '../../../img/esu-executive-suite.jpg'
import suitesLogo from '../../../img/suites-logo.jpg'
import { Link } from 'react-router-dom'
function EkoSuites() {
    return(
        <div className='eko-suites'>
            <div className='cont'>
                <h1>EKO SUITES</h1>
                <nav>
                    <Link to='/'>Home</Link> /
                    <Link to='/our-hotels'>Our Hotels</Link> / Eko Suites 
                </nav>
            </div>
            <main>
                <div className='logo-div'>
                <img src={suitesLogo} alt=""/>
                </div>
                <p className='suites-info'>Eko Suites is tucked in the most discreet part of the property with 88 large suites. The property offers a peaceful, quiet and relaxing ambience. All the suites have King size beds, a safety deposit box, a hairdryer, a mini bar with a working desk and most suites have a kitchenette. It is perfect for families especially because it has connecting rooms and even more so as the perfect lovers’ getaway.</p>
                <p className='num-of-rooms'>
                    <strong>Overview : 88 Rooms</strong>
                    <ul>
                        <li>32 Deluxe Rooms</li>
                        <li>48 Studio Suites</li>
                        <li>8 Exectutive Suites</li>
                    </ul>
                </p>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESDeluxe} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Deluxe Room</h4>
                        <p>All deluxe rooms feature a personal safe, minibar and a working desk.</p>
                        <nav>
                            <span>ROOM: 29.68 M2</span>
                            <span>BATHROOM – 6.82 M2</span>
                        </nav>
                        <button>
                            <Link to='/deluxe-room'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESStudio} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Studio Suite</h4>
                        <p>The studio suite features more space with a lounge for receiving visitors, a personal safe, minibar, working desk and a kitchenette.</p>
                        <nav>
                            <span>ROOM: 42.60 M2</span>
                            <span>BATHROOM: 5.76 M2</span>
                        </nav>
                        <button>
                            <Link to='/studio-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={ESExectutive} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Executive Room</h4>
                        <p>It is a luxurious and spacious suite, suitable for the traveller seeking ultimate comfort whilst away from home. Large Bathroom with Separate Walk-in Shower. Tastefully decorated with a King Size Bed and a separate lounge.</p>
                        <nav>
                            <span>BEDROOM: 39.41 M2</span>
                            <span>BATHROOM: 7.64 M2</span>
                        </nav>
                        <nav>
                            <span>LOUNGE: 25.78 M2</span> 
                            <span>LCD TV</span>
                        </nav>
                        <button>
                            <Link to='executive-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default EkoSuites;