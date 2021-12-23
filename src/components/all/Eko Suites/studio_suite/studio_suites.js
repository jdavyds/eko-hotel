import './studio_suite.css'
import { useState } from 'react'
import esuStudio1 from '../../../img/esu-studio-suite-1.jpg'
import esuStudio2 from '../../../img/esu-studio-suite-5.jpg'
import esuStudio3 from '../../../img/esu-studio-suite-3.jpg'
import esuStudio4 from '../../../img/esu-studio-suite-4.jpg'
import esuStudio5 from '../../../img/esu-studio-suite-2.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function StudioSuites() {
    const [ studioImg1, setStudioImg1 ] = useState('esuStudio1 active')
    const [ studioImg2, setStudioImg2 ] = useState('esuStudio2')
    const [ studioImg3, setStudioImg3 ] = useState('esuStudio3')
    const [ studioImg4, setStudioImg4 ] = useState('esuStudio4')
    const [ studioImg5, setStudioImg5 ] = useState('esuStudio5')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    function studioDot1() {
        setStudioImg1('esuStudio1 active')
        setStudioImg2('esuStudio2')
        setStudioImg3('esuStudio3')
        setStudioImg4('esuStudio4')
        setStudioImg5('esuStudio5')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
    }
    function studioDot2() {
        setStudioImg1('esuStudio1')
        setStudioImg2('esuStudio2 active')
        setStudioImg3('esuStudio3')
        setStudioImg4('esuStudio4')
        setStudioImg5('esuStudio5')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
    }
    function studioDot3() {
        setStudioImg1('esuStudio1')
        setStudioImg2('esuStudio2')
        setStudioImg3('esuStudio3 active')
        setStudioImg4('esuStudio4')
        setStudioImg5('esuStudio5')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
    }
    function studioDot4() {
        setStudioImg1('esuStudio1')
        setStudioImg2('esuStudio2')
        setStudioImg3('esuStudio3')
        setStudioImg4('esuStudio4 active')
        setStudioImg5('esuStudio5')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
    }
    function studioDot5() {
        setStudioImg1('esuStudio1')
        setStudioImg2('esuStudio2')
        setStudioImg3('esuStudio3')
        setStudioImg4('esuStudio4')
        setStudioImg5('esuStudio5 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
    }
    return(
        <div className='studio-suite'>
        <p className='ss-p'>
                <div className='ss-hdr'>
                <h1 className='blue'>Studio Suite</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="studio-suite-gallery">
            <nav>
            <img src={esuStudio1} alt="" className={studioImg1}/>
            <img src={esuStudio2} alt="" className={studioImg2}/>
            <img src={esuStudio3} alt="" className={studioImg3}/>
            <img src={esuStudio4} alt="" className={studioImg4}/>
            <img src={esuStudio5} alt="" className={studioImg5}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={studioDot1} className={dot1}
                /> <FiberManualRecord onClick={studioDot2} className={dot2}
                /> <FiberManualRecord onClick={studioDot3} className={dot3}
                /> <FiberManualRecord onClick={studioDot4} className={dot4}
                /><FiberManualRecord onClick={studioDot5} className={dot5}/>
            </nav>
        </section>
        <section className="studio-suite-info">
            <div className="studio-suite-desc">
                <h3>Studio Suite</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>The studio suite features more space with a lounge for receiving visitors, a personal safe, minibar, working desk and a kitchenette.
                    <ul><li> <strong>Room:</strong>42.6m2
                        </li>
                        <li><strong>Bathroom:</strong>5.76m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="studio-suite-features">
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
export default StudioSuites;