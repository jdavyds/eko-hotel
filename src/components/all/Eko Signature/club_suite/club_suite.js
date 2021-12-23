import './club_suite.css'
import { useState } from 'react'
import esCS1 from '../../../img/es-club-suite-1.jpg'
import esCS2 from '../../../img/es-club-suite-2.jpg'
import esCS3 from '../../../img/es-club-suite-3.jpg'
import esCS4 from '../../../img/es-club-suite-4.jpg'
import esCS5 from '../../../img/es-club-suite-5.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function ClubSuite() {
    const [ clubImg1, setClubImg1 ] = useState('esClub1 active')
    const [ clubImg2, setClubImg2 ] = useState('esClub2')
    const [ clubImg3, setClubImg3 ] = useState('esClub3')
    const [ clubImg4, setClubImg4 ] = useState('esClub4')
    const [ clubImg5, setClubImg5 ] = useState('esClub5')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    function clubDot1() {
        setClubImg1('esClub1 active')
        setClubImg2('esClub2')
        setClubImg3('esClub3')
        setClubImg4('esClub4')
        setClubImg5('esClub5')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
    }
    function clubDot2() {
        setClubImg1('esClub1')
        setClubImg2('esClub2 active')
        setClubImg3('esClub3')
        setClubImg4('esClub4')
        setClubImg5('esClub5')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
    }
    function clubDot3() {
        setClubImg1('esClub1')
        setClubImg2('esClub2')
        setClubImg3('esClub3 active')
        setClubImg4('esClub4')
        setClubImg5('esClub5')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
    }
    function clubDot4() {
        setClubImg1('esClub1')
        setClubImg2('esClub2')
        setClubImg3('esClub3')
        setClubImg4('esClub4 active')
        setClubImg5('esClub5')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
    }
    function clubDot5() {
        setClubImg1('esClub1')
        setClubImg2('esClub2')
        setClubImg3('esClub3')
        setClubImg4('esClub4')
        setClubImg5('esClub5 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
    }
    return(
        <div className='club-suite'>
        <p className='club-p'>
                <div className='club-hdr'>
                <h1 className='blue'>Club Suite</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="club-suite-gallery">
            <nav>
            <img src={esCS1} alt="" className={clubImg1}/>
            <img src={esCS2} alt="" className={clubImg2}/>
            <img src={esCS3} alt="" className={clubImg3}/>
            <img src={esCS4} alt="" className={clubImg4}/>
            <img src={esCS5} alt="" className={clubImg5}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={clubDot1} className={dot1}
                /> <FiberManualRecord onClick={clubDot2} className={dot2}
                /> <FiberManualRecord onClick={clubDot3} className={dot3}
                /> <FiberManualRecord onClick={clubDot4} className={dot4}
                /><FiberManualRecord onClick={clubDot5} className={dot5}/>
            </nav>
        </section>
        <section className="club-suite-info">
            <div className="club-suite-desc">
                <h3>Club Suite</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>The smallest of the suites at Eko Signature but by no means the least. The suite has views of both the Atlantic and the city of Lagos, minibar, a lounge for visitors, king sized beds, nespresso machines, Internet protocol TVs, bath tub and separate walk-in shower, complimentary internet and breakfast. Each Club suite is designed with luxury in mind, amenities by Pascal Morabito and furnishings by Philippe Hurel. Daily turndown is available in all suites.
                    <ul><li> <strong>Room:</strong>40.44 m2
                        </li>
                        <li><strong>Bathroom:</strong>10.11 m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="club-suite-features">
                <h6>ROOM FEATURES</h6>
                <div>
                    <FontAwesomeIcon icon={faUserFriends} className='feat-icon'/> DOUBLE KING BED
                </div>
                <div>
                <FontAwesomeIcon icon={faMugHot} className='feat-icon'/> BREAKFAST
                </div>
                <div>
                    <FontAwesomeIcon icon={faSun} className='feat-icon'/> AIR CONDITIONING
                </div>
                <div>
                    <FontAwesomeIcon icon={faWineGlassAlt} className='feat-icon'/> MINI BAR
                </div>
                <div>
                    <FontAwesomeIcon icon={faWifi} className='feat-icon'/> WIFI SERVICES
                </div>
                <div>
                    <FontAwesomeIcon icon={faCar} className='feat-icon'/> FREE PARKING
                </div>
            </aside>
        </section>
        </div>
    )
}
export default ClubSuite;