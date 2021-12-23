import './meeting_rooms.css'
import { Link } from 'react-router-dom'
import mRoom from '../../../img/meeting-room-main.jpg'
function MeetingRooms() {
    return(
        <div className="meetroom">
            <div className='cont'>
                <h1>MEETING ROOMS</h1>
                <nav>
                    <Link to='/'>Home</Link> / Meeting Rooms
                </nav>
            </div>
            <p className='meetroom-p'>
                <div className='meetroom-hdr'>
                <h1 className='brown'>MEETING ROOMS</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="meetroom-gallery">
            <nav>
            <img src={mRoom} alt=""/>
            </nav>
            </section>
            <section className='meetroom-info'>
            <p>At Eko Hotel & Suites we can accommodate meetings of up to 2000 people and provide all the necessary assistance in terms of your technology requirements, food & beverage preferences.</p>
            <p>A range of audio-visual equipment is available including LCD projectors, overhead projectors, PA systems as well as internet and Wi-Fi connections in all the meeting room types.</p>
            <p>Teleconferencing, translators, decorators and artistic requirements can also be arranged on request.</p>
            </section>
        </div>
    )
}
export default MeetingRooms;