import './classic_suites.css'
import { useState } from 'react'
import ehClassicSt1 from '../../../img/eh-classic-suites-1.jpg'
import ehClassicSt2 from '../../../img/eh-classic-suites-2.jpg'
import ehClassicSt3 from '../../../img/eh-classic-suites-3.jpg'
import ehClassicSt4 from '../../../img/eh-classic-suites-4.jpg'
import ehClassicSt5 from '../../../img/eh-classic-suites-5.jpg'

import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function ClassicSuites() {
    const [ cstImg1, setCstImg1 ] = useState('ehClassicSt1 active')
    const [ cstImg2, setCstImg2 ] = useState('ehClassicSt2')
    const [ cstImg3, setCstImg3 ] = useState('ehClassicSt3')
    const [ cstImg4, setCstImg4 ] = useState('ehClassicSt4')
    const [ cstImg5, setCstImg5 ] = useState('ehClassicSt5')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')

    function cstDot1() {
        setCstImg1('ehClassicSt1 active')
        setCstImg2('ehClassicSt2')
        setCstImg3('ehClassicSt3')
        setCstImg4('ehClassicSt4')
        setCstImg5('ehClassicSt5')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
    }
    function cstDot2() {
        setCstImg1('ehClassicSt1')
        setCstImg2('ehClassicSt2 active')
        setCstImg3('ehClassicSt3')
        setCstImg4('ehClassicSt4')
        setCstImg5('ehClassicSt5')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
    }
    function cstDot3() {
        setCstImg1('ehClassicSt1')
        setCstImg2('ehClassicSt2')
        setCstImg3('ehClassicSt3 active')
        setCstImg4('ehClassicSt4')
        setCstImg5('ehClassicSt5')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
    }
    function cstDot4() {
        setCstImg1('ehClassicSt1')
        setCstImg2('ehClassicSt2')
        setCstImg3('ehClassicSt3')
        setCstImg4('ehClassicSt4 active')
        setCstImg5('ehClassicSt5')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
    }
    function cstDot5() {
        setCstImg1('ehClassicSt1')
        setCstImg2('ehClassicSt2')
        setCstImg3('ehClassicSt3')
        setCstImg4('ehClassicSt4')
        setCstImg5('ehClassicSt5 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
    }
    return(
        <div className='classic-suites'>
            <p className='hcst-p'>
                <div className='hcst-hdr'>
                <h1 className='blue'>Classic Suites</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="classic-suites-gallery">
            <nav>
            <img src={ehClassicSt1} alt="" className={cstImg1}/>
            <img src={ehClassicSt2} alt="" className={cstImg2}/>
            <img src={ehClassicSt3} alt="" className={cstImg3}/>
            <img src={ehClassicSt4} alt="" className={cstImg4}/>
            <img src={ehClassicSt5} alt="" className={cstImg5}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={cstDot1} className={dot1}
                /> <FiberManualRecord onClick={cstDot2} className={dot2}
                /> <FiberManualRecord onClick={cstDot3} className={dot3}
                /> <FiberManualRecord onClick={cstDot4} className={dot4}
                /> <FiberManualRecord onClick={cstDot5} className={dot5}
                />
            </nav>
        </section>
        <section className="classic-suites-info">
            <div className="classic-suites-desc">
                <h3>Classic Suites</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>Our Classic Suites are standard rooms with extra space for your comfort. They have separate living rooms that are ideal for meetings.
                    <ul><li> <strong>Lounge:</strong>19.10m2</li>
                        <li> <strong>Bedroom:</strong>20.19m2</li>
                        <li><strong>Bathroom:</strong>4.73m2</li>
                        <li><strong>Balcony:</strong>4.31m2</li>
                        <li>TV’s can watch from lounge during day without having to sit on bed</li>
                        <li>Watch /TV in bedroom at night when relaxing</li>
                        <li>Privacy for meetings</li>
                        <li>Extra space when staying for long term</li>
                        <li>High speed internet</li>
                        <li>42” LCD Flat Screen TVs</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="classic-suites-features">
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
export default ClassicSuites;