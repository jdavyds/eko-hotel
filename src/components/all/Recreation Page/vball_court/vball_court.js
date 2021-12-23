import './vball_court.css'
import { Link } from 'react-router-dom'
import vball from '../../../img/swimming-pool-7.jpg'
function VballCourt() {
    return(
        <div className="vball-court">
            <div className='cont'>
                <h1>VOLLEYBALL COURT</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / Volleyball Court
                </nav>
            </div>
            <p className='vball-p'>
                <div className='vball-hdr'>
                <h1 className='brown'>VOLLEYBALL COURT</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="vball-gallery">
            <nav>
            <img src={vball} alt=""/>
            </nav>
            </section>
            <section className='vball-info'>
            <div>DETAILS</div>
            <p>In-house guests have free access to the court to enjoy more recreational time. Access to the court for outside guests are at an additional cost.</p>
            <p><strong>Opening Time:</strong> Monday – Sunday (8am – 6pm)</p>
            </section>
        </div>
    )
}
export default VballCourt;