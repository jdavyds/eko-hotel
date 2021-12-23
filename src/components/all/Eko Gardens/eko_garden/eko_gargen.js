import './eko_garden.css'
import EGStandard from '../../../img/eko-gardens.jpg'
import EGClassic from '../../../img/eg-classic-room.jpg'
import kuramoLogo from '../../../img/kuramo_logo.jpg'
import { Link } from 'react-router-dom'
function EkoGarden() {
    return(
        <div className='eko-garden'>
            <div className='cont'>
                <h1>EKO GARDEN</h1>
                <nav>
                    <Link to='/'>Home</Link> /
                    <Link to='/our-hotels'>Our Hotels</Link> / Eko Gardens 
                </nav>
            </div>
            <main>
                <div className='logo-div'>
                <img src={kuramoLogo} alt=""/>
                </div>
                <p className='kuramo-info'>At Kuramo Gardens, the rooms are well appointed and designed to provide comfort and convenience. Besides the usual amenities such as central air conditioning, satellite TV, fast internet connection, a fridge and bathroom amenities of the highest quality, the guests can also have fast internet access in all the public areas through our WiFI (Wireless) network.</p>
                <p className='num-of-rooms'>
                    <strong>Overview : 118 Rooms</strong>
                    <ul>
                        <li>46 Garden Classic Rooms</li>
                        <li>72 Garden Standard Rooms</li>
                    </ul>
                </p>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EGStandard} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Standard Room</h4>
                        <p>The garden standard rooms occupy the Left wing of Kuramo Gardens, has spacious rooms with large windows, fully Air-Conditioned, phone, Cable TV, fridge and a view of the city of Lagos.</p>
                        <nav>
                            <span>ROOM: 29.68 M2</span>
                            <span>BATHROOM – 6.82 M2</span>
                        </nav>
                        <button>
                            <Link to='/superior-room'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='rooms'>
                    <div className="room-img">
                        <img src={EGClassic} alt="" />
                    </div>
                    <div className='room-info'>
                        <h4>Classic Room</h4>
                        <p>Taking up the entire right wing of the Gardens, the Kuramo garden classic room are totally refurbished spacious rooms with a mini lounge for visitors, large windows, fully air-conditioned, direct dial telephone cable, TV, fridge, city view with walk-in showers.</p>
                        <nav>
                            <span>ROOM: 26.50 M2</span>
                            <span>BATHROOM: 7.09 M2</span>
                        </nav>
                        <button>
                            <Link to='/classic-room'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default EkoGarden;