import './bball_court.css'
import { Link } from 'react-router-dom'
import bball from '../../../img/basketball-court (1).jpg'
function BballCourt() {
    return(
        <div className="bball-court">
            <div className='cont'>
                <h1>BASKETBALL COURT</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / Basketball Court
                </nav>
            </div>
            <p className='bball-p'>
                <div className='bball-hdr'>
                <h1 className='brown'>BASKETBALL COURT</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="bball-gallery">
            <nav>
            <img src={bball} alt=""/>
            </nav>
            </section>
            <section className='bball-info'>
            <div>DETAILS</div>
            <p>Enjoy shooting hoops at the court for more leisure time. Access to the court for outside guests are at an additional cost.</p>
            <p><strong>Opening Time:</strong> Monday – Sunday (8am – 8pm)</p>
            </section>
        </div>
    )
}
export default BballCourt;