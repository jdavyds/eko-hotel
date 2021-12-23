import './eko_garden_superior.css'
import { useState } from 'react'
import egSup1 from '../../../img/eg-superior-room-1.jpg'
import egSup2 from '../../../img/eg-superior-room-2.jpg'
import egSup3 from '../../../img/eg-superior-room-3.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'

function GardenSuperior() {
    const [ gsImg1, setGsImg1 ] = useState('egSup1 active')
    const [ gsImg2, setGsImg2 ] = useState('egSup2')
    const [ gsImg3, setGsImg3 ] = useState('egSup3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')


    function gDot1() {
        setGsImg1('egSup1 active')
        setGsImg2('egSup2')
        setGsImg3('egSup3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function gDot2() {
        setGsImg1('egSup1')
        setGsImg2('egSup2 active')
        setGsImg3('egSup3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function gDot3() {
        setGsImg1('egSup1')
        setGsImg2('egSup2')
        setGsImg3('egSup3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className='garden-superior'>
        <p className='gs-p'>
                <div className='gs-hdr'>
                <h1 className='blue'>Superior Room</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="superior-gallery">
            <nav>
            <img src={egSup1} alt="" className={gsImg1}/>
            <img src={egSup2} alt="" className={gsImg2}/>
            <img src={egSup3} alt="" className={gsImg3}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={gDot1} className={dot1}
                /> <FiberManualRecord onClick={gDot2} className={dot2}
                /> <FiberManualRecord onClick={gDot3} className={dot3}
                />
            </nav>
        </section>
        <section className="superior-info">
            <div className="sup-room-desc">
                <h3>Superior Room</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>
                The garden standard rooms occupy the Left wing of Kuramo Gardens, has spacious rooms with large windows, fully Air-Conditioned, phone, Cable TV, fridge and a view of the city of Lagos.
                    <ul><li> <strong>Room:</strong>25.32m2
                        </li>
                        <li><strong>Bathroom:</strong>3.69m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="sup-room-features">
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
export default GardenSuperior;