import './eko_hotels.css'
import { Link } from 'react-router-dom'
import hotelsLogo from '../../../img/hotels_logo.jpg'
import EHClassic from '../../../img/eh-classic-superior-room.jpg'
import EHAtlantic from '../../../img/eh-atlantic-superior-room.jpg'
import EHClassicSuite from '../../../img/eh-classic-suites.jpg'
import EHDiplomaticSuite from '../../../img/eh-diplomatic-suites.jpg'
import EHPresidentialSuite from '../../../img/eh-presidential-suites.jpg'

function EkoHotel() {
    return(
        <div className='eko-hotel'>
            <div className='cont'>
                <h1>EKO HOTEL</h1>
                <nav>
                    <Link to='/'>Home</Link> /
                    <Link to='/our-hotels'>Our Hotels</Link> / Eko Hotels
                </nav>
            </div>
            <main>
                <div className='logo-div'>
                <img src={hotelsLogo} alt=""/>
                </div>
                <p className='hotels-info'>Eko Hotel rooms and its suites are decorated designed for your comfort and relaxation. All the rooms have large balconies and beautiful views of either the city or the Atlantic Ocean; our friendly and professional staff are always a phone call away to assist you with anything you may need. Eko Hotel is the main building on our property and it houses most of the attractive features which Eko Hotels & Suites has become known for. These include 447 rooms, a spectacular swimming pool, the Sky Restaurant & Lounge, Crossroads Tex-Mex Restaurant, Red Chinese Restaurant & Lounge, the Kuramo sports cafe, the Calabash Bar, Lagoon Breeze Restaurant and a thai restaurant coming soon; a world-class gym; steam rooms; a massage parlour; a medical clinic, the Art21 Gallery, a bookstore; several lounges; a business centre and state-of-the-art conferencing and banqueting facilities.</p>
                <p className='num-of-rooms'>
                    <strong>Overview : 447 Rooms</strong>
                    <ul>
                        <li> 201 Classic Superior Rooms</li>
                        <li>221 Atlantic Superior Rooms</li>
                        <li>20 Classic Suites</li>
                        <li>4 Diplomatic Suites</li>
                        <li>1 Presidential Suite</li>
                    </ul>
                </p>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EHClassic} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Classic Superior Room</h4>
                        <p>Standard Rooms with marble floors and a great view of the City with smoking or non – smoking rooms available.</p>
                        <nav>
                            <span>BEDROOM: 19.47 M2</span>
                            <span>BALCONY – 4.31 M2</span>
                        </nav>
                        <nav>
                            <span>BATHROOM: 4.73 M2</span> 
                            <span>42” LCD FLAT SCREEN TVS</span>
                        </nav>
                        <button>
                            <Link to='classic-superior-room'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EHAtlantic} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Atlantic Superior Room</h4>
                        <p>Standard Rooms with marble floors and a great view of the City with smoking or non – smoking rooms available.</p>
                        <nav>
                            <span>BEDROOM: 19.47 M2</span>
                            <span>BATHROOM: 4.73 M2</span> 
                        </nav>
                        <nav>
                            <span>BALCONY – 4.62 M2</span>
                            <span>42” LCD FLAT SCREEN TVS</span>
                        </nav>
                        <button>
                            <Link to='atlantic-superior-room'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EHClassicSuite} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Classic Suites</h4>
                        <p>Our Classic Suites are standard rooms with extra space for your comfort. They have separate living rooms that are ideal for meetings.</p>
                        <nav>
                            <span>LOUNGE: 19.10 M2</span>
                            <span>BEDROOM: 20.19 M2</span>
                        </nav>
                        <nav>
                            <span>BALCONY: 4.31 M2</span> 
                            <span>BATHROOM: 4.73 M2</span>
                        </nav>
                        <button>
                            <Link to='classic-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EHDiplomaticSuite} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Diplomatic Suites</h4>
                        <p>The Diplomatic Suites are stately with ostentatious designs and breath-taking views of the Atlantic. The suite has a DVD Player, Hi Definition LED TVs, and a separate lounge, bar and dining area for guests. It has an adjoining standard room that makes it perfect for a large family.</p>
                        <nav>
                            <span>BEDROOM: 29.50 M2</span>
                            <span>BATHROOM: 7.78 M2</span>
                        </nav>
                        <nav>
                            <span>LOUNGE/LOBBY/BAR: 73.67 M2</span> 
                            <span>BALCONY: 23.20 M2</span>
                        </nav>
                        <button>
                            <Link to='diplomatic-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EHPresidentialSuite} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Presidential Suites</h4>
                        <p>The most extraordinary suite in Lagos especially because of its magnificent views of the beautiful city of Lagos and the Atlantic Ocean. It has an exceptionally regal layout and is most suitable for hosting very important personalities. It is more than four times the size of a superior bedroom and has a Lounge and bar area, Working / dining area, large screen TVs, hi-fi stereo system and luxurious bathroom with a Jacuzzi and shower. It can accommodate an extra bed. The suite comes with full complimentary bar and VIP gifts.</p>
                        <button>
                            <Link to='presidential-suites'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default EkoHotel;