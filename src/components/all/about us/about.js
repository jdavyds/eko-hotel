import './about.css'
import { Link } from 'react-router-dom'
import pool from '../../img/home-about.jpg'
function About() {
    return(
        <div className='about'>
            <p className='abt-p'>
                <div className='abt-hdr'>
                <h1 className='blue'>WELCOME TO</h1>
                <h1 className='brown'>EKO HOTEL & SUITES</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <div className='abt-main'>
                <section>
                    <img src={pool} alt="sky-view" className='sky-view'  />
                </section>
                <section className='abt-main-section'>
                    <h3>ABOUT US</h3>
                    <h2>The Most Preferred Hotel in West Africa</h2>
                    <p>
                    Eko Hotels & Suites is the most preferred hotel in West Africa, and it is all about the right mix! Located in the heart of Victoria Island, we offer our clients a perfect blend of business & leisure amenities with dining and recreational options delicately infused in one amazing space. We crown all these with services that meet the highest international standards.
                    </p> <p>
                    Overlooking the new Eko Atlantic City and Atlantic Ocean, it is just a 10-minute drive to the City Centre and only 45minutes away from the Airport.
                    </p> <p>
                    Our hotels are designed for your comfort and convenience. Your security is our primary concern and you will find our customer care second to none.
                    </p>
                    <button>
                        <Link to='/about-us'>
                        LEARN MORE
                        </Link>
                    </button>
                </section>
            </div>
        </div>
    )
}
export default About;