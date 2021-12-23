import './recreation_page.css'
import { Link } from 'react-router-dom'
import pool from '../../../img/swimming-page.jpg'
import gym from '../../../img/gym-page.jpg'
import spa from '../../../img/spa-page.jpg'
import nail from '../../../img/nail-studio-page.jpg'
import tennis from '../../../img/tennis-court-page.jpg'
import bball from '../../../img/basketball-court-page.jpg'
import vball from '../../../img/volleyball-court-page.jpg'
import { ArrowForward } from '@material-ui/icons'


function RecreationPage() {
    return(
        <div className="recreation-page">
            <div className='cont'>
                <h1>RECREATION SERVICES</h1>
                <nav>
                    <Link to='/'>Home</Link> / Recreation Services
                </nav>
            </div>
            <main>
            <p className='rpage-p'>
                <div className='rpage-hdr'>
                <h1 className='brown'>RECREATION </h1>
                <h1 className='blue'> SERVICES</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section>
                <div className="service">
                    <div className='img-div'>
                        <img src={pool} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>SWIMMING POOL</h4>
                        <p>Additional perks of being an in-house guest is to enjoy a day or night time...</p>
                        <Link to='swimming-pool'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
                <div className="service">
                    <div className='img-div'>
                        <img src={gym} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>GYMNASIUM</h4>
                        <p>Our well-equipped gym with sauna rooms are accessible to our in-house...</p>
                        <Link to='gymnasium'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
                <div className="service">
                    <div className='img-div'>
                        <img src={spa} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>SPA</h4>
                        <p>You are cordially invited to experience relaxing massages...</p>
                        <Link to='spa'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
                <div className="service">
                    <div className='img-div'>
                        <img src={nail} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>SALOON & NAIL STUDIO</h4>
                        <p>You are invited to experience a variety of relaxing wellness treatment...</p>
                        <Link to='saloon-and-nail-studio'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
                <div className="service">
                    <div className='img-div'>
                        <img src={tennis} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>TENNIS COURT</h4>
                        <p>Our flood-lit court is accessible for more leisure time. Access to the court...</p>
                        <Link to='tennis-court'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
                <div className="service">
                    <div className='img-div'>
                        <img src={bball} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>BASKETBALL COURT</h4>
                        <p>Enjoy shooting hoops at the court for more leisure time. Access to the court...</p>
                        <Link to='basketball-court'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
                <div className="service">
                    <div className='img-div'>
                        <img src={vball} alt="" />
                    </div>
                    <div className='service-info'>
                        <h4>VOLLEYBALL COURT</h4>
                        <p>In-house guests have free access to the court to enjoy more recreational ...</p>
                        <Link to='volleyball-court'>VIEW MORE <ArrowForward/></Link>
                    </div>
                </div>
            </section>
            </main>
        </div>
    )
}
export default RecreationPage;