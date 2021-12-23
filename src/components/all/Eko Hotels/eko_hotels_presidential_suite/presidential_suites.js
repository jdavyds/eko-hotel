import './presidential_suites.css'
import { useState } from 'react'
import ehPresSt1 from '../../../img/eh-presidential-suites-1.jpg'
import ehPresSt2 from '../../../img/eh-presidential-suites-2.jpg'
import ehPresSt3 from '../../../img/eh-presidential-suites-3.jpg'
import ehPresSt4 from '../../../img/eh-presidential-suites-4.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function PresidentialSuites() {
    const [ psImg1, setPsImg1 ] = useState('ehPresidentialSt1 active')
    const [ psImg2, setPsImg2 ] = useState('ehPresidentialSt2')
    const [ psImg3, setPsImg3 ] = useState('ehPresidentialSt3')
    const [ psImg4, setPsImg4 ] = useState('ehPresidentialSt4')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')

    function psDot1() {
        setPsImg1('ehPresidentialSt1 active')
        setPsImg2('ehPresidentialSt2')
        setPsImg3('ehPresidentialSt3')
        setPsImg4('ehPresidentialSt4')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
    }
    function psDot2() {
        setPsImg1('ehPresidentialSt1')
        setPsImg2('ehPresidentialSt2 active')
        setPsImg3('ehPresidentialSt3')
        setPsImg4('ehPresidentialSt4')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
    }
    function psDot3() {
        setPsImg1('ehPresidentialSt1')
        setPsImg2('ehPresidentialSt2')
        setPsImg3('ehPresidentialSt3 active')
        setPsImg4('ehPresidentialSt4')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
    }
    function psDot4() {
        setPsImg1('ehPresidentialSt1')
        setPsImg2('ehPresidentialSt2')
        setPsImg3('ehPresidentialSt3')
        setPsImg4('ehPresidentialSt4 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
    }
    return(
        <div className='presidential-suite'>
            <p className='hps-p'>
                <div className='hps-hdr'>
                <h1 className='blue'>Presidential Suite</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="presidential-suites-gallery">
            <nav>
            <img src={ehPresSt1} alt="" className={psImg1}/>
            <img src={ehPresSt2} alt="" className={psImg2}/>
            <img src={ehPresSt3} alt="" className={psImg3}/>
            <img src={ehPresSt4} alt="" className={psImg4}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={psDot1} className={dot1}
                /> <FiberManualRecord onClick={psDot2} className={dot2}
                /> <FiberManualRecord onClick={psDot3} className={dot3}
                /> <FiberManualRecord onClick={psDot4} className={dot4}/>
            </nav>
        </section>
        <section className="presidential-suites-info">
            <div className="presidential-suites-desc">
                <h3>Presidential Suites</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>The most extraordinary suite in Lagos especially because of its magnificent views of the beautiful city of Lagos and the Atlantic Ocean. It has an exceptionally regal layout and is most suitable for hosting very important personalities. It is more than four times the size of a superior bedroom and has a Lounge and bar area, Working / dining area, large screen TVs, hi-fi stereo system and luxurious bathroom with a Jacuzzi and shower. It can accommodate an extra bed. The suite comes with full complimentary bar and VIP gifts.
                    <ul><li> <strong>Main Lobby (Entrance):</strong>13.44m2</li>
                        <li><strong>Lounge/Dining/Bar/Office:</strong>127.32m2</li>
                        <li><strong>Kitchen:</strong>8.30m2</li>
                        <li><strong>Bedroom:</strong>45.11m2</li>
                        <li><strong>Bathroom:</strong>25.00m2</li>
                        <li><strong>Guest Toilet:</strong>3.86m2</li>
                        <li><strong>Balcony (Dinning):</strong>13.47m2</li>
                        <li><strong>Balcony (Living):</strong>15.22m2</li>
                        <li><strong>Balcony (Bedroom):</strong>11.95m2</li>
                        <li><strong>Other Balconies:</strong>2.61m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="presidential-suites-features">
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
                    <FontAwesomeIcon icon={faWifi} className='feat-icon'/> WIFI CONNECTION
                </div>
                <div>
                    <FontAwesomeIcon icon={faCar} className='feat-icon'/> FREE PARKING
                </div>
            </aside>
        </section>
        </div>
    )
}
export default PresidentialSuites;