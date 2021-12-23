import './sig_presidential_suite.css'
import { useState } from 'react'
import esSigPres1 from '../../../img/es-signature-presidential-suite-1.jpg'
import esSigPres2 from '../../../img/es-signature-presidential-suite-2.jpg'
import esSigPres3 from '../../../img/es-signature-presidential-suite-3.jpg'
import esSigPres4 from '../../../img/es-signature-presidential-suite-4.jpg'
import esSigPres5 from '../../../img/es-signature-presidential-suite-5.jpg'
import esSigPres6 from '../../../img/es-signature-presidential-suite-6.jpg'
import esSigPres7 from '../../../img/es-signature-presidential-suite-7.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function SigPresSuite() {
    const [ signaturePresImg1, setSignaturePresImg1 ] = useState('esSignaturePres1 active')
    const [ signaturePresImg2, setSignaturePresImg2 ] = useState('esSignaturePres2')
    const [ signaturePresImg3, setSignaturePresImg3 ] = useState('esSignaturePres3')
    const [ signaturePresImg4, setSignaturePresImg4 ] = useState('esSignaturePres4')
    const [ signaturePresImg5, setSignaturePresImg5 ] = useState('esSignaturePres5')
    const [ signaturePresImg6, setSignaturePresImg6 ] = useState('esSignaturePres6')
    const [ signaturePresImg7, setSignaturePresImg7 ] = useState('esSignaturePres7')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    const [ dot6, setDot6 ] = useState('dot6')
    const [ dot7, setDot7 ] = useState('dot7')
    function signaturePresDot1() {
        setSignaturePresImg1('esSignaturePres1 active')
        setSignaturePresImg2('esSignaturePres2')
        setSignaturePresImg3('esSignaturePres3')
        setSignaturePresImg4('esSignaturePres4')
        setSignaturePresImg5('esSignaturePres5')
        setSignaturePresImg6('esSignaturePres6')
        setSignaturePresImg7('esSignaturePres7')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signaturePresDot2() {
        setSignaturePresImg1('esSignaturePres1')
        setSignaturePresImg2('esSignaturePres2 active')
        setSignaturePresImg3('esSignaturePres3')
        setSignaturePresImg4('esSignaturePres4')
        setSignaturePresImg5('esSignaturePres5')
        setSignaturePresImg6('esSignaturePres6')
        setSignaturePresImg7('esSignaturePres7')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signaturePresDot3() {
        setSignaturePresImg1('esSignaturePres1')
        setSignaturePresImg2('esSignaturePres2')
        setSignaturePresImg3('esSignaturePres3 active')
        setSignaturePresImg4('esSignaturePres4')
        setSignaturePresImg5('esSignaturePres5')
        setSignaturePresImg6('esSignaturePres6')
        setSignaturePresImg7('esSignaturePres7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signaturePresDot4() {
        setSignaturePresImg1('esSignaturePres1')
        setSignaturePresImg2('esSignaturePres2')
        setSignaturePresImg3('esSignaturePres3')
        setSignaturePresImg4('esSignaturePres4 active')
        setSignaturePresImg5('esSignaturePres5')
        setSignaturePresImg6('esSignaturePres6')
        setSignaturePresImg7('esSignaturePres7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signaturePresDot5() {
        setSignaturePresImg1('esSignaturePres1')
        setSignaturePresImg2('esSignaturePres2')
        setSignaturePresImg3('esSignaturePres3')
        setSignaturePresImg4('esSignaturePres4')
        setSignaturePresImg5('esSignaturePres5 active')
        setSignaturePresImg6('esSignaturePres6')
        setSignaturePresImg7('esSignaturePres7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signaturePresDot6() {
        setSignaturePresImg1('esSignaturePres1')
        setSignaturePresImg2('esSignaturePres2')
        setSignaturePresImg3('esSignaturePres3')
        setSignaturePresImg4('esSignaturePres4')
        setSignaturePresImg5('esSignaturePres5')
        setSignaturePresImg6('esSignaturePres6 active')
        setSignaturePresImg7('esSignaturePres7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6 active')
        setDot7('dot7')
    }
    function signaturePresDot7() {
        setSignaturePresImg1('esSignaturePres1')
        setSignaturePresImg2('esSignaturePres2')
        setSignaturePresImg3('esSignaturePres3')
        setSignaturePresImg4('esSignaturePres4')
        setSignaturePresImg5('esSignaturePres5')
        setSignaturePresImg6('esSignaturePres6')
        setSignaturePresImg7('esSignaturePres7 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7 active')
    }
    return(
        <div className='signature-presidential-suite'>
        <p className='signature-presidential-p'>
                <div className='signature-presidential-hdr'>
                <h1 className='blue'>Signature Presidential Suite</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="signature-presidential-suite-gallery">
            <nav>
            <img src={esSigPres1} alt="" className={signaturePresImg1}/>
            <img src={esSigPres2} alt="" className={signaturePresImg2}/>
            <img src={esSigPres3} alt="" className={signaturePresImg3}/>
            <img src={esSigPres4} alt="" className={signaturePresImg4}/>
            <img src={esSigPres5} alt="" className={signaturePresImg5}/>
            <img src={esSigPres6} alt="" className={signaturePresImg6}/>
            <img src={esSigPres7} alt="" className={signaturePresImg7}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={signaturePresDot1} className={dot1}
                /><FiberManualRecord onClick={signaturePresDot2} className={dot2}
                /><FiberManualRecord onClick={signaturePresDot3} className={dot3}
                /><FiberManualRecord onClick={signaturePresDot4} className={dot4}
                /><FiberManualRecord onClick={signaturePresDot5} className={dot5}
                /><FiberManualRecord onClick={signaturePresDot6} className={dot6}
                /><FiberManualRecord onClick={signaturePresDot7} className={dot7}/>
            </nav>
        </section>
        <section className="signature-presidential-suite-info">
            <div className="signature-presidential-suite-desc">
                <h3>Signature Presidential Suite</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>For luxury redefined, the Signature Presidential Suite offers that and much more. With a foyer, 2 separate lounges, a dining area, library, kitchenette, 2 guest toilets, a Jacuzzi, walk-in shower, 2 LED TVs, one Hi-DEF 96” LED Screen.
                    <ul>
                        <li><strong>Foyer(Security):</strong>16.24 m2</li>
                        <li><strong>Lobby:</strong>2.05 m2</li>
                        <li><strong>Toilet(Security):</strong>2.71 m2</li>
                        <li><strong>Kitchenette:</strong>5.53 m2</li>
                        <li><strong>Lounge:</strong>91.23 m2</li>
                        <li><strong>Guest Toilet:</strong>2.73 m2</li>
                        <li><strong>Bedroom + Bathroom:</strong>70.63 m2</li>
                        <li><strong>Storage(Bedroom):</strong>3.50 m2</li>
                    </ul>
                </p>
                <button>BOOK THIS ROOM NOW</button>
            </div>
            <aside className="signature-suite-features">
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
export default SigPresSuite;