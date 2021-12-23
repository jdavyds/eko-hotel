import './eko_garden_classic.css'
import { useState } from 'react'
import egClassic1 from '../../../img/eg-classic-room-1.jpg'
import egClassic2 from '../../../img/eg-classic-room-2.jpg'
import egClassic3 from '../../../img/eg-classic-room-3.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function GardenClassic() {
    const [ gcImg1, setGcImg1 ] = useState('egClassic1 active')
    const [ gcImg2, setGcImg2 ] = useState('egClassic2')
    const [ gcImg3, setGcImg3 ] = useState('egClassic3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')


    function gDot1() {
        setGcImg1('egClassic1 active')
        setGcImg2('egClassic2')
        setGcImg3('egClassic3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function gDot2() {
        setGcImg1('egClassic1')
        setGcImg2('egClassic2 active')
        setGcImg3('egClassic3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function gDot3() {
        setGcImg1('egClassic1')
        setGcImg2('egClassic2')
        setGcImg3('egClassic3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className='garden-classic'>
        <p className='gc-p'>
                <div className='gc-hdr'>
                <h1 className='blue'>Classic Room</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="classic-gallery">
            <nav>
            <img src={egClassic1} alt="" className={gcImg1}/>
            <img src={egClassic2} alt="" className={gcImg2}/>
            <img src={egClassic3} alt="" className={gcImg3}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={gDot1} className={dot1}
                /> <FiberManualRecord onClick={gDot2} className={dot2}
                /> <FiberManualRecord onClick={gDot3} className={dot3}
                />
            </nav>
        </section>
        <section className="classic-info">
            <div className="classic-room-desc">
                <h3>Classic Room</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>
                Taking up the entire right wing of the Gardens, the Kuramo garden classic room are totally refurbished spacious rooms with a mini lounge for visitors, large windows, fully air-conditioned, direct dial telephone cable, TV, fridge, city view with walk-in showers.
                    <ul><li> <strong>Room:</strong>26.50m2
                        </li>
                        <li><strong>Bathroom:</strong>7.09m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="classic-room-features">
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
export default GardenClassic;