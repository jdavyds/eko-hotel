import './classic_superior.css'
import { useState } from 'react'
import ehClassicSup1 from '../../../img/eh-classic-superior-room-1.jpg'
import ehClassicSup2 from '../../../img/eh-classic-superior-room-2.jpg'
import ehClassicSup3 from '../../../img/eh-classic-superior-room-3.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function ClassicSuperior() {
    const [ csImg1, setCsImg1 ] = useState('ehClassicSup1 active')
    const [ csImg2, setCsImg2 ] = useState('ehClassicSup2')
    const [ csImg3, setCsImg3 ] = useState('ehClassicSup3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')

    function csDot1() {
        setCsImg1('ehClassicSup1 active')
        setCsImg2('ehClassicSup2')
        setCsImg3('ehClassicSup3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function csDot2() {
        setCsImg1('ehClassicSup1')
        setCsImg2('ehClassicSup2 active')
        setCsImg3('ehClassicSup3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function csDot3() {
        setCsImg1('ehClassicSup1')
        setCsImg2('ehClassicSup2')
        setCsImg3('ehClassicSup3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className='classic-superior'>
            <p className='hcs-p'>
                <div className='hcs-hdr'>
                <h1 className='blue'>Classic Superior Room</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="classic-superior-gallery">
            <nav>
            <img src={ehClassicSup1} alt="" className={csImg1}/>
            <img src={ehClassicSup2} alt="" className={csImg2}/>
            <img src={ehClassicSup3} alt="" className={csImg3}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={csDot1} className={dot1}
                /> <FiberManualRecord onClick={csDot2} className={dot2}
                /> <FiberManualRecord onClick={csDot3} className={dot3}
                />
            </nav>
        </section>
        <section className="classic-superior-info">
            <div className="classic-sup-room-desc">
                <h3>Classic Superior Room</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>Standard Rooms with marble floors and a great view of the City with smoking or non – smoking rooms available.
                    <ul><li> <strong>Room:</strong>19.47m2</li>
                        <li><strong>Bathroom:</strong>4.72m2</li>
                        <li><strong>Balcony:</strong>4.31m2</li>
                        <li>Spacious room equipped with working desk</li>
                        <li>Panoramic view of Victoria Island</li>
                        <li>High speed internet connection</li>
                        <li>King size bed – space and comfort and plenty of space if joined by spouse</li>
                        <li>42” LCD Flat Screen TVs</li>
                        <li>Safe deposit box</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="classic-sup-room-features">
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
export default ClassicSuperior;