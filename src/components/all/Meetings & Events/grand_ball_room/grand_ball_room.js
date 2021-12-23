import './grand_ball_room.css'
import { Link } from 'react-router-dom'
import gbRoom from '../../../img/grand-ballroom.jpg'
function GrandBallRoom() {
    return(
        <div className="ballroom">
            <div className='cont'>
                <h1>GRAND BALLROOM</h1>
                <nav>
                    <Link to='/'>Home</Link> / Grand Ballroom
                </nav>
            </div>
            <p className='ballroom-p'>
                <div className='ballroom-hdr'>
                <h1 className='brown'>GRAND BALLROOM</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="ballroom-gallery">
            <nav>
            <img src={gbRoom} alt=""/>
            </nav>
            </section>
            <section className='ballroom-info'>
            <p>For your banqueting needs, our “Grand Ballroom” which sits 350 people for dinner is ideal and comes equipped with state-of-the-art visual and audio equipment. It can also be divided into smaller rooms as required.</p>
            <p>These have been excellently put together with you (the conference organizer) in mind.</p>
            </section>
        </div>
    )
}
export default GrandBallRoom;