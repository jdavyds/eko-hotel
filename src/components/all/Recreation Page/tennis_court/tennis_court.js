import './tennis_court.css'
import { Link } from 'react-router-dom'
import tennis from '../../../img/tennis-court (1).jpg'
function TennisCourt() {
    return(
        <div className="tennis-court">
            <div className='cont'>
                <h1>LAWN TENNIS COURT</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / Lawn Tennis Court
                </nav>
            </div>
            <p className='tennis-p'>
                <div className='tennis-hdr'>
                <h1 className='brown'>LAWN TENNIS COURT</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="tennis-gallery">
            <nav>
            <img src={tennis} alt=""/>
            </nav>
            </section>
            <section className='tennis-info'>
            <div>DETAILS</div>
            <p>Our flood-lit court is accessible for more leisure time. Access to the court for outside guests, and tennis lessons are available at an additional cost per hour.</p>
            <p><strong>Opening Time:</strong> Monday – Sunday (8am – 8pm)</p>
            </section>
        </div>
    )
}
export default TennisCourt;