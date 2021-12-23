import './atlantic_superior.css'
import { useState } from 'react'
import ehAtlanticSup1 from '../../../img/eh-atlantic-superior-room-1.jpg'
import ehAtlanticSup2 from '../../../img/eh-atlantic-superior-room-2.jpg'
import ehAtlanticSup3 from '../../../img/eh-atlantic-superior-room-3.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function AtlanticSuperior() {
    const [ asImg1, setAsImg1 ] = useState('ehAtlanticSup1 active')
    const [ asImg2, setAsImg2 ] = useState('ehAtlanticSup2')
    const [ asImg3, setAsImg3 ] = useState('ehAtlanticSup3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')

    function asDot1() {
        setAsImg1('ehAtlanticSup1 active')
        setAsImg2('ehAtlanticSup2')
        setAsImg3('ehAtlanticSup3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function asDot2() {
        setAsImg1('ehAtlanticSup1')
        setAsImg2('ehAtlanticSup2 active')
        setAsImg3('ehAtlanticSup3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function asDot3() {
        setAsImg1('ehAtlanticSup1')
        setAsImg2('ehAtlanticSup2')
        setAsImg3('ehAtlanticSup3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className='atlantic-superior'>
            <p className='has-p'>
                <div className='has-hdr'>
                <h1 className='blue'>Atlantic Superior Room</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="classic-superior-gallery">
            <nav>
            <img src={ehAtlanticSup1} alt="" className={asImg1}/>
            <img src={ehAtlanticSup2} alt="" className={asImg2}/>
            <img src={ehAtlanticSup3} alt="" className={asImg3}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={asDot1} className={dot1}
                /> <FiberManualRecord onClick={asDot2} className={dot2}
                /> <FiberManualRecord onClick={asDot3} className={dot3}
                />
            </nav>
        </section>
        <section className="atlantic-superior-info">
            <div className="atlantic-sup-room-desc">
                <h3>Atlantic Superior Room</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>Standard Rooms with marble floors and a great view of the City with smoking or non – smoking rooms available.
                    <ul><li> <strong>Room:</strong>19.47m2</li>
                        <li><strong>Bathroom:</strong>4.43m2</li>
                        <li><strong>Balcony:</strong>4.62m2</li>
                        <li>Spacious room equipped with working desk</li>
                        <li>Breath-taking view of the Atlantic Ocean.</li>
                        <li>High speed internet connection</li>
                        <li>King size bed – space and comfort and plenty of space.</li>
                        <li>Take the sun sit outdoors without leaving the room on the balcony</li>
                        <li>42” LCD Flat Screen TVs</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="atlantic-sup-room-features">
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
export default AtlanticSuperior;