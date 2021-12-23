import './about_page.css'
import { Link } from 'react-router-dom'
function AboutPage() {
    return(
        <div className='about-page'>
            <div className='cont'>
                <h1>About Us</h1>
                <nav>
                    <Link to='/'>Home</Link> / About us 
                </nav>
            </div>
            <section>
            <div className='abt-page-p'>
                <div className='abt-page-hdr'>
                <h1 className='brown'>ABOUT</h1>
                <h1 className='blue'>EKO HOTELS & SUITES</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <p>Eko Hotels & Suites is the most preferred hotel in West Africa and it's all about the right mix! Located in the heart of Victoria Island and shielded from the hustle and bustle of the Lagos metropolis, we offer our corporate clients and walk in guests a perfect blend of relaxation, activities, and African tradition delicately infused to meet the highest international standards.</p>
            <p>Overlooking the Eko Atlantic City and Ocean, it is just a 10-minute drive to the City Centre and only 45minutes away from the Airport.</p>
            <p>Our hotels are designed for your comfort and convenience. Your security is our primary concern and you'll find our customer care second to none.</p>
            <p>Our hotel has taken important steps to live up to West Africa's future model in the hospitality sector. With the best conference and banqueting facilities, tastefully furnished to a 7000-seater capacity, a world-class swimming pool, 824 excellently furnished rooms spread across 4 hotels: EKO SIGNATURE, EKO SUITES, EKO HOTEL AND KURAMO GARDENS, mostly with a choice of city and sea views. We have 9 different restaurants and 7 different bars serving a range of international cuisines, amongst other facilities.</p>
            <p>The hotel is equipped with a state of the art health and fitness centre comprising of a gym, a tennis/basket ball court, a volley ball court, a sauna, spa, salon, and nail studio. We have an in-house medical clinic as well.</p>
            <p>We host the best themed buffet every Friday evening where we serve specialties across the globe: Africa, Asia, America, Italy, Mexico Middle East and Mongolia amongst others.</p>
            <p>We are passionate about serving you and look forward to having you.</p>
            <p>Welcome to Eko Hotels & Suites, Nesting International Standards with African Hospitality.</p>
            </section>
            <section className='vis-mis'>
                <div className='abt-page-h2'>
                    <h2 className='brown'>OUR</h2>
                    <h2 className='blue'>VISION & MISSION</h2>
                </div>
                <ul>
                    <li>We aspire to be the leading and preferred hotel in West Africa</li>
                    <li>We are committed to exceeding guests' expectations</li>
                    <li>We are dedicated to providing impeccable facilities and personalized services</li>
                    <li>We are proud to deliver genuine care, comfort and warmth to all our guests</li>
                    <li>We pursue growth and development through continuous learning</li>
                    <li>We are constantly adapting to an ever-changing world</li>
                    <li>Eko Hotels & Suites... Nesting International Standards with African Hospitality</li>
                </ul>
                <div className='abt-page-h2'>
                    <h2 className='brown'>OUR</h2>
                    <h2 className='blue'>VALUES</h2>
                </div>
                <ul>
                    <li>Commitment to Excellence</li>
                    <li>Pursuit of Growth</li>
                    <li>Genuine Care</li>
                    <li>Dedication</li>
                    <li>Creativity</li>
                    <li>Passion</li>
                    <li>Pride</li>
                    <li>Integrity and Discipline</li>
                    <li>Socially and Environmentally Responsible</li>
                </ul>
            </section>
        </div>
    )
}
export default AboutPage;