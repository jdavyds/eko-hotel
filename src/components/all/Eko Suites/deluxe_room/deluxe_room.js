import './deluxe_room.css'
import { useState } from 'react'
import esuDeluxe1 from '../../../img/esu-deluxe-room-1.jpg'
import esuDeluxe2 from '../../../img/esu-deluxe-room-2.jpg'
import esuDeluxe3 from '../../../img/esu-deluxe-room-3.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function DeluxeRoom() {
    const [ deluxeImg1, setDeluxeImg1 ] = useState('esuDeluxe1 active')
    const [ deluxeImg2, setDeluxeImg2 ] = useState('esuDeluxe2')
    const [ deluxeImg3, setDeluxeImg3 ] = useState('esuDeluxe3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')

    function deluxeDot1() {
        setDeluxeImg1('esuDeluxe1 active')
        setDeluxeImg2('esuDeluxe2')
        setDeluxeImg3('esuDeluxe3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function deluxeDot2() {
        setDeluxeImg1('esuDeluxe1')
        setDeluxeImg2('esuDeluxe2 active')
        setDeluxeImg3('esuDeluxe3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function deluxeDot3() {
        setDeluxeImg1('esuDeluxe1')
        setDeluxeImg2('esuDeluxe2')
        setDeluxeImg3('esuDeluxe3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className='deluxe-room'>
        <p className='dr-p'>
                <div className='dr-hdr'>
                <h1 className='blue'>Deluxe Room</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="classic-gallery">
            <nav>
            <img src={esuDeluxe1} alt="" className={deluxeImg1}/>
            <img src={esuDeluxe2} alt="" className={deluxeImg2}/>
            <img src={esuDeluxe3} alt="" className={deluxeImg3}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={deluxeDot1} className={dot1}
                /> <FiberManualRecord onClick={deluxeDot2} className={dot2}
                /> <FiberManualRecord onClick={deluxeDot3} className={dot3}
                />
            </nav>
        </section>
        <section className="deluxe-room-info">
            <div className="deluxe-room-desc">
                <h3>Deluxe Room</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>All deluxe rooms feature a personal safe, minibar and a working desk.
                    <ul><li> <strong>Room:</strong>29.68m2
                        </li>
                        <li><strong>Bathroom:</strong>6.82m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="deluxe-room-features">
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

export default DeluxeRoom;