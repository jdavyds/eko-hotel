import './premium_suite.css'
import { useState } from 'react'
import esPS1 from '../../../img/es-premium-suite-1.jpg'
import esPS2 from '../../../img/es-premium-suite-2.jpg'
import esPS3 from '../../../img/es-premium-suite-3.jpg'
import esPS4 from '../../../img/es-premium-suite-4.jpg'
import esPS5 from '../../../img/es-premium-suite-5.jpg'
import esPS6 from '../../../img/es-premium-suite-6.jpg'
import esPS7 from '../../../img/es-premium-suite-7.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function PremiumSuite() {
    const [ premiumImg1, setPremiumImg1 ] = useState('esPremium1 active')
    const [ premiumImg2, setPremiumImg2 ] = useState('esPremium2')
    const [ premiumImg3, setPremiumImg3 ] = useState('esPremium3')
    const [ premiumImg4, setPremiumImg4 ] = useState('esPremium4')
    const [ premiumImg5, setPremiumImg5 ] = useState('esPremium5')
    const [ premiumImg6, setPremiumImg6 ] = useState('esPremium6')
    const [ premiumImg7, setPremiumImg7 ] = useState('esPremium7')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    const [ dot6, setDot6 ] = useState('dot6')
    const [ dot7, setDot7 ] = useState('dot7')
    function premiumDot1() {
        setPremiumImg1('esPremium1 active')
        setPremiumImg2('esPremium2')
        setPremiumImg3('esPremium3')
        setPremiumImg4('esPremium4')
        setPremiumImg5('esPremium5')
        setPremiumImg6('esPremium6')
        setPremiumImg7('esPremium7')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function premiumDot2() {
        setPremiumImg1('esPremium1')
        setPremiumImg2('esPremium2 active')
        setPremiumImg3('esPremium3')
        setPremiumImg4('esPremium4')
        setPremiumImg5('esPremium5')
        setPremiumImg6('esPremium6')
        setPremiumImg7('esPremium7')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function premiumDot3() {
        setPremiumImg1('esPremium1')
        setPremiumImg2('esPremium2')
        setPremiumImg3('esPremium3 active')
        setPremiumImg4('esPremium4')
        setPremiumImg5('esPremium5')
        setPremiumImg6('esPremium6')
        setPremiumImg7('esPremium7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function premiumDot4() {
        setPremiumImg1('esPremium1')
        setPremiumImg2('esPremium2')
        setPremiumImg3('esPremium3')
        setPremiumImg4('esPremium4 active')
        setPremiumImg5('esPremium5')
        setPremiumImg6('esPremium6')
        setPremiumImg7('esPremium7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function premiumDot5() {
        setPremiumImg1('esPremium1')
        setPremiumImg2('esPremium2')
        setPremiumImg3('esPremium3')
        setPremiumImg4('esPremium4')
        setPremiumImg5('esPremium5 active')
        setPremiumImg6('esPremium6')
        setPremiumImg7('esPremium7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
        setDot6('dot6')
        setDot7('dot7')
    }
    function premiumDot6() {
        setPremiumImg1('esPremium1')
        setPremiumImg2('esPremium2')
        setPremiumImg3('esPremium3')
        setPremiumImg4('esPremium4')
        setPremiumImg5('esPremium5')
        setPremiumImg6('esPremium6 active')
        setPremiumImg7('esPremium7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6 active')
        setDot7('dot7')
    }
    function premiumDot7() {
        setPremiumImg1('esPremium1')
        setPremiumImg2('esPremium2')
        setPremiumImg3('esPremium3')
        setPremiumImg4('esPremium4')
        setPremiumImg5('esPremium5')
        setPremiumImg6('esPremium6')
        setPremiumImg7('esPremium7 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7 active')
    }
    return(
        <div className='premium-suite'>
        <p className='premium-p'>
                <div className='premium-hdr'>
                <h1 className='blue'>Premium Suite</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="premium-suite-gallery">
            <nav>
            <img src={esPS1} alt="" className={premiumImg1}/>
            <img src={esPS2} alt="" className={premiumImg2}/>
            <img src={esPS3} alt="" className={premiumImg3}/>
            <img src={esPS4} alt="" className={premiumImg4}/>
            <img src={esPS5} alt="" className={premiumImg5}/>
            <img src={esPS6} alt="" className={premiumImg6}/>
            <img src={esPS7} alt="" className={premiumImg7}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={premiumDot1} className={dot1}
                /><FiberManualRecord onClick={premiumDot2} className={dot2}
                /><FiberManualRecord onClick={premiumDot3} className={dot3}
                /><FiberManualRecord onClick={premiumDot4} className={dot4}
                /><FiberManualRecord onClick={premiumDot5} className={dot5}
                /><FiberManualRecord onClick={premiumDot6} className={dot6}
                /><FiberManualRecord onClick={premiumDot7} className={dot7}/>
            </nav>
        </section>
        <section className="premium-suite-info">
            <div className="premium-suite-desc">
                <h3>Premium Suite</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>This suite offers all the trims of the club suite but with a separate lounge and visitor’s toilet. Rooms have 2 Internet Protocol Tvs, minibar, a toilet for visitors, nespresso machines, bath tub with separate walk-in power showers, amenities by Pascal Morabito and automatic climate controlled air conditioning.
                    <ul><li> <strong>Room+Lounge:</strong>59.76 m2
                        </li>
                        <li><strong>Bathroom:</strong>8.51 m2</li>
                        <li><strong>Guest Toilet:</strong>2.19 m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="premium-suite-features">
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
export default PremiumSuite;