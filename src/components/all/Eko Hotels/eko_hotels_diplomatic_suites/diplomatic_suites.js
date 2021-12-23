import './diplomatic_suites.css'
import { useState } from 'react'
import ehDipSt1 from '../../../img/eh-diplomatic-suites-1.jpg'
import ehDipSt2 from '../../../img/eh-diplomatic-suites-2.jpg'
import ehDipSt3 from '../../../img/eh-diplomatic-suites-3.jpg'
import ehDipSt4 from '../../../img/eh-diplomatic-suites-4.jpg'
import ehDipSt5 from '../../../img/eh-diplomatic-suites-5.jpg'
import ehDipSt6 from '../../../img/eh-diplomatic-suites-6.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function DiplomaticSuites() {
    const [ dsImg1, setDsImg1 ] = useState('ehDiplomaticSt1 active')
    const [ dsImg2, setDsImg2 ] = useState('ehDiplomaticSt2')
    const [ dsImg3, setDsImg3 ] = useState('ehDiplomaticSt3')
    const [ dsImg4, setDsImg4 ] = useState('ehDiplomaticSt4')
    const [ dsImg5, setDsImg5 ] = useState('ehDiplomaticSt5')
    const [ dsImg6, setDsImg6 ] = useState('ehDiplomaticSt6')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    const [ dot6, setDot6 ] = useState('dot6')

    function dsDot1() {
        setDsImg1('ehDiplomaticSt1 active')
        setDsImg2('ehDiplomaticSt2')
        setDsImg3('ehDiplomaticSt3')
        setDsImg4('ehDiplomaticSt4')
        setDsImg5('ehDiplomaticSt5')
        setDsImg6('ehDiplomaticSt6')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
    }
    function dsDot2() {
        setDsImg1('ehDiplomaticSt1')
        setDsImg2('ehDiplomaticSt2 active')
        setDsImg3('ehDiplomaticSt3')
        setDsImg4('ehDiplomaticSt4')
        setDsImg5('ehDiplomaticSt5')
        setDsImg6('ehDiplomaticSt6')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
    }
    function dsDot3() {
        setDsImg1('ehDiplomaticSt1')
        setDsImg2('ehDiplomaticSt2')
        setDsImg3('ehDiplomaticSt3 active')
        setDsImg4('ehDiplomaticSt4')
        setDsImg5('ehDiplomaticSt5')
        setDsImg6('ehDiplomaticSt6')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
    }
    function dsDot4() {
        setDsImg1('ehDiplomaticSt1')
        setDsImg2('ehDiplomaticSt2')
        setDsImg3('ehDiplomaticSt3')
        setDsImg4('ehDiplomaticSt4 active')
        setDsImg5('ehDiplomaticSt5')
        setDsImg6('ehDiplomaticSt6')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
        setDot6('dot6')
    }
    function dsDot5() {
        setDsImg1('ehDiplomaticSt1')
        setDsImg2('ehDiplomaticSt2')
        setDsImg3('ehDiplomaticSt3')
        setDsImg4('ehDiplomaticSt4')
        setDsImg5('ehDiplomaticSt5 active')
        setDsImg6('ehDiplomaticSt6')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
        setDot6('dot6')
    }
    function dsDot6() {
        setDsImg1('ehDiplomaticSt1')
        setDsImg2('ehDiplomaticSt2')
        setDsImg3('ehDiplomaticSt3')
        setDsImg4('ehDiplomaticSt4')
        setDsImg5('ehDiplomaticSt5')
        setDsImg6('ehDiplomaticSt6 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6 active')
    }
    return(
        <div className='diplomatic-suites'>
        <p className='hds-p'>
                <div className='hds-hdr'>
                <h1 className='blue'>Diplomatic Suites</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="diplomatic-suites-gallery">
            <nav>
            <img src={ehDipSt1} alt="" className={dsImg1}/>
            <img src={ehDipSt2} alt="" className={dsImg2}/>
            <img src={ehDipSt3} alt="" className={dsImg3}/>
            <img src={ehDipSt4} alt="" className={dsImg4}/>
            <img src={ehDipSt5} alt="" className={dsImg5}/>
            <img src={ehDipSt6} alt="" className={dsImg6}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={dsDot1} className={dot1}
                /> <FiberManualRecord onClick={dsDot2} className={dot2}
                /> <FiberManualRecord onClick={dsDot3} className={dot3}
                /> <FiberManualRecord onClick={dsDot4} className={dot4}
                /> <FiberManualRecord onClick={dsDot5} className={dot5}
                /> <FiberManualRecord onClick={dsDot6} className={dot6}/>
            </nav>
        </section>
        <section className="diplomatic-suites-info">
            <div className="diplomatic-suites-desc">
                <h3>Diplomatic Suites</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>The Diplomatic Suites are stately with ostentatious designs and breath-taking views of the Atlantic. The suite has a DVD Player, Hi Definition LED TVs, and a separate lounge, bar and dining area for guests. It has an adjoining standard room that makes it perfect for a large family.
                    <ul>
                        <li><strong>Lounge/Lobby/Bar:</strong>73.67m2</li>
                        <li> <strong>Room:</strong>29.50m2</li>
                        <li><strong>Bathroom:</strong>7.78m2</li>
                        <li><strong>Balcony:</strong>23.20m2</li>
                        <li><strong>Guest Toilet:</strong>4.24m2</li>
                        <li>Kitchenette- for convenience when staying long term or for entertaining guest/clients</li>
                        <li>Equipped with refrigerator/micro wave and utensils</li>
                        <li>High speed internet connection</li>
                        <li>Bar in lounge area for serving your guests</li>
                        <li>Separate for personal space</li>
                        <li>Comfortable sofas & chairs for formal or informal meetings</li>
                        <li>DVD player for your light entertainment</li>
                        <li>Multi channels satellite TV various languages</li>
                        <li>42” LCD Flat Screen TVs</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="diplomatic-suites-features">
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
export default DiplomaticSuites;