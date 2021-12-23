import './meetings_&_events.css'
import { Link } from 'react-router-dom'
import gbRoom from '../../../img/ball-room.jpg'
import convCentre from '../../../img/convention-centre.jpg'
import fantasia from '../../../img/fantasia.jpg'
import mRoom from '../../../img/meeting-room.jpg'
function MeetingsEvents() {
    return(
        <div className="meetings">
            <div className='cont'>
                <h1>MEETING & EVENTS</h1>
                <nav>
                    <Link to='/'>Home</Link> / Meetings & Events
                </nav>
            </div>
            <main>
                <div className='meeting-room'>
                    <div className="meeting-room-img">
                        <img src={gbRoom} alt="" />
                    </div>
                    <div className='meeting-room-info'>
                        <h4>Grand Ball Room</h4>
                        <p>For your banqueting needs, our “Grand Ballroom” which sits 350 people for dinner is ideal and comes equipped with state-of-the-art visual and audio equipment.</p>
                        <button>
                            <Link to='/grand-ballroom'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='meeting-room'>
                    <div className="meeting-room-img">
                        <img src={convCentre} alt="" />
                    </div>
                    <div className='meeting-room-info'>
                        <h4>Eko Convention Centre</h4>
                        <p>The Eko Convention Centre is the largest multipurpose conference; banquet and exhibition centre in Nigeria, with a maximum floor space of 5,151 square metres.</p>
                        <button>
                            <Link to='/eko-convention-center'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='meeting-room'>
                    <div className="meeting-room-img">
                        <img src={fantasia} alt="" />
                    </div>
                    <div className='meeting-room-info'>
                        <h4>Fantasia</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem illum vitae facere doloremque quas voluptates dolore.</p>
                        <button>
                            <Link to='/fantasia'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
                <div className='meeting-room'>
                    <div className="meeting-room-img">
                        <img src={mRoom} alt="" />
                    </div>
                    <div className='meeting-room-info'>
                        <h4>Meeting Rooms</h4>
                        <p>At Eko Hotel & Suites we can accommodate meetings of up to 2000 people and provide all the necessary assistance in terms of your technology requirements.</p>
                        <button>
                            <Link to='/meeting-rooms'>
                            VIEW DETAILS
                            </Link>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default MeetingsEvents;