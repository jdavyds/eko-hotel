import './executive_suite.css'
import { useState } from 'react'
import esuExecutive1 from '../../../img/esu-executive-suite-1.jpg'
import esuExecutive2 from '../../../img/esu-executive-suite-2.jpg'
import esuExecutive3 from '../../../img/esu-executive-suite-3.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function ExecutiveSuites() {
    const [ executiveImg1, setExecutiveImg1 ] = useState('esuExecutive1 active')
    const [ executiveImg2, setExecutiveImg2 ] = useState('esuExecutive2')
    const [ executiveImg3, setExecutiveImg3 ] = useState('esuExecutive3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    function deluxeDot1() {
        setExecutiveImg1('esuExecutive1 active')
        setExecutiveImg2('esuExecutive2')
        setExecutiveImg3('esuExecutive3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function deluxeDot2() {
        setExecutiveImg1('esuExecutive1')
        setExecutiveImg2('esuExecutive2 active')
        setExecutiveImg3('esuExecutive3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function deluxeDot3() {
        setExecutiveImg1('esuExecutive1')
        setExecutiveImg2('esuExecutive2')
        setExecutiveImg3('esuExecutive3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className='executive-suite'>
            <p className='es-p'>
                    <div className='es-hdr'>
                    <h1 className='blue'>Executive Suite</h1>
                    </div>
                    <span></span>
                    <span></span>
                    <span></span>
            </p>
            <section className="executive-suite-gallery">
                <nav>
                <img src={esuExecutive1} alt="" className={executiveImg1}/>
                <img src={esuExecutive2} alt="" className={executiveImg2}/>
                <img src={esuExecutive3} alt="" className={executiveImg3}/>
                </nav>
                <nav className='rct-nav'>
                    <FiberManualRecord onClick={deluxeDot1} className={dot1}
                    /> <FiberManualRecord onClick={deluxeDot2} className={dot2}
                    /> <FiberManualRecord onClick={deluxeDot3} className={dot3}
                    />
                </nav>
            </section>
            <section className="executive-suite-info">
                <div className="executive-suite-desc">
                    <h3>Executive Suite</h3>
                    <h6>ROOM DESCRIPTION</h6>
                    <p>It is a luxurious and spacious suite, suitable for the traveller seeking ultimate comfort whilst away from home. Large Bathroom with Separate Walk-in Shower. Tastefully decorated with a King Size Bed and a separate lounge. The room features a kitchenette, Tea-Coffee Making Facilities, Iron & Board, Safe and a Mini-Bar.
                        <ul><li> <strong>Bedroom:</strong>39.41m2</li>
                            <li><strong>Lounge:</strong>25.74m2</li>
                            <li><strong>Bathroom:</strong>7.64m2</li>
                        </ul>
                    </p>
                    <button>BOOK THIS ROOM NOW</button>
                </div>
                <aside className="executive-suite-features">
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
export default ExecutiveSuites;