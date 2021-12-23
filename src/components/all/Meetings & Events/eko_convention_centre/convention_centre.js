import './convention_centre.css'
import { Link } from 'react-router-dom'
import convCentre from '../../../img/eko-convention-center.jpg'
function ConventionCentre() {
    return(
        <div className="convention-center">
            <div className='cont'>
                <h1>EKO CONVENTION CENTER</h1>
                <nav>
                    <Link to='/'>Home</Link> / Eko Convention Center
                </nav>
            </div>
            <p className='convention-center-p'>
                <div className='convention-center-hdr'>
                <h1 className='brown'>EKO CONVENTION CENTER</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="convention-center-gallery">
            <nav>
            <img src={convCentre} alt=""/>
            </nav>
            </section>
            <section className='convention-center-info'>
            <p>The Eko Convention Centre is the largest multipurpose conference; banquet and exhibition centre in Nigeria, with a maximum floor space of 5,151 square metres.</p>
            <p>This facility provides sufficient space to fit 270 exhibition booths; it also has the capacity to cater to dinner and conference events for up to 3,000. It is the most prestigious concert venue in Nigeria, and can host up to 6000 in concert.</p>
            <p>The Hall can be divided into five separate sections for smaller conferences and exhibitions and comes with built in sound systems, professional lighting and roll away stage with carpeting to enhance sound effects.</p>
            <p>All of these wonderful features come in addition to our newly built “Grand Ballroom” which sits 350 people for dinner. We have 13 purpose-built meeting rooms that come equipped with state-of-the-art visual and audio equipment.</p>
            </section>
        </div>
    )
}
export default ConventionCentre;