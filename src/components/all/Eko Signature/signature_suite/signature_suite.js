import './signature_suite.css'
import { useState } from 'react'
import esSig1 from '../../../img/es-signature-suite-1.jpg'
import esSig2 from '../../../img/es-signature-suite-2.jpg'
import esSig3 from '../../../img/es-signature-suite-3.jpg'
import esSig4 from '../../../img/es-signature-suite-4.jpg'
import esSig5 from '../../../img/es-signature-suite-5.jpg'
import esSig6 from '../../../img/es-signature-suite-6.jpg'
import esSig7 from '../../../img/es-signature-suite-7.jpg'
import { FiberManualRecord } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMugHot, faCar, faWineGlassAlt, faWifi, faSun, faUserFriends } from '@fortawesome/free-solid-svg-icons'
function SignatureSuite() {
    const [ signatureImg1, setSignatureImg1 ] = useState('esSignature1 active')
    const [ signatureImg2, setSignatureImg2 ] = useState('esSignature2')
    const [ signatureImg3, setSignatureImg3 ] = useState('esSignature3')
    const [ signatureImg4, setSignatureImg4 ] = useState('esSignature4')
    const [ signatureImg5, setSignatureImg5 ] = useState('esSignature5')
    const [ signatureImg6, setSignatureImg6 ] = useState('esSignature6')
    const [ signatureImg7, setSignatureImg7 ] = useState('esSignature7')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    const [ dot6, setDot6 ] = useState('dot6')
    const [ dot7, setDot7 ] = useState('dot7')
    function signatureDot1() {
        setSignatureImg1('esSignature1 active')
        setSignatureImg2('esSignature2')
        setSignatureImg3('esSignature3')
        setSignatureImg4('esSignature4')
        setSignatureImg5('esSignature5')
        setSignatureImg6('esSignature6')
        setSignatureImg7('esSignature7')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signatureDot2() {
        setSignatureImg1('esSignature1')
        setSignatureImg2('esSignature2 active')
        setSignatureImg3('esSignature3')
        setSignatureImg4('esSignature4')
        setSignatureImg5('esSignature5')
        setSignatureImg6('esSignature6')
        setSignatureImg7('esSignature7')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signatureDot3() {
        setSignatureImg1('esSignature1')
        setSignatureImg2('esSignature2')
        setSignatureImg3('esSignature3 active')
        setSignatureImg4('esSignature4')
        setSignatureImg5('esSignature5')
        setSignatureImg6('esSignature6')
        setSignatureImg7('esSignature7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signatureDot4() {
        setSignatureImg1('esSignature1')
        setSignatureImg2('esSignature2')
        setSignatureImg3('esSignature3')
        setSignatureImg4('esSignature4 active')
        setSignatureImg5('esSignature5')
        setSignatureImg6('esSignature6')
        setSignatureImg7('esSignature7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signatureDot5() {
        setSignatureImg1('esSignature1')
        setSignatureImg2('esSignature2')
        setSignatureImg3('esSignature3')
        setSignatureImg4('esSignature4')
        setSignatureImg5('esSignature5 active')
        setSignatureImg6('esSignature6')
        setSignatureImg7('esSignature7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
        setDot6('dot6')
        setDot7('dot7')
    }
    function signatureDot6() {
        setSignatureImg1('esSignature1')
        setSignatureImg2('esSignature2')
        setSignatureImg3('esSignature3')
        setSignatureImg4('esSignature4')
        setSignatureImg5('esSignature5')
        setSignatureImg6('esSignature6 active')
        setSignatureImg7('esSignature7')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6 active')
        setDot7('dot7')
    }
    function signatureDot7() {
        setSignatureImg1('esSignature1')
        setSignatureImg2('esSignature2')
        setSignatureImg3('esSignature3')
        setSignatureImg4('esSignature4')
        setSignatureImg5('esSignature5')
        setSignatureImg6('esSignature6')
        setSignatureImg7('esSignature7 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
        setDot7('dot7 active')
    }
    return(
        <div className='signature-suite'>
        <p className='signature-p'>
                <div className='signature-hdr'>
                <h1 className='blue'>Signature Suite</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
        </p>
        <section className="signature-suite-gallery">
            <nav>
            <img src={esSig1} alt="" className={signatureImg1}/>
            <img src={esSig2} alt="" className={signatureImg2}/>
            <img src={esSig3} alt="" className={signatureImg3}/>
            <img src={esSig4} alt="" className={signatureImg4}/>
            <img src={esSig5} alt="" className={signatureImg5}/>
            <img src={esSig6} alt="" className={signatureImg6}/>
            <img src={esSig7} alt="" className={signatureImg7}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={signatureDot1} className={dot1}
                /><FiberManualRecord onClick={signatureDot2} className={dot2}
                /><FiberManualRecord onClick={signatureDot3} className={dot3}
                /><FiberManualRecord onClick={signatureDot4} className={dot4}
                /><FiberManualRecord onClick={signatureDot5} className={dot5}
                /><FiberManualRecord onClick={signatureDot6} className={dot6}
                /><FiberManualRecord onClick={signatureDot7} className={dot7}/>
            </nav>
        </section>
        <section className="signature-suite-info">
            <div className="signature-suite-desc">
                <h3>Signature Suite</h3>
                <h6>ROOM DESCRIPTION</h6>
                <p>Signature Suites feature a lounge for visitors, 2 Internet Protocol TVs, a nesperesso machine, automated minibar, a toilet for visitors, walk-in power shower with separate bath tub and a butler service on request.
                    <ul><li> <strong>Room+Lounge:</strong>80.48 m2
                        </li>
                        <li><strong>Bathroom:</strong>9.44 m2</li>
                        <li><strong>Guest Toilet:</strong>2.19 m2</li>
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
export default SignatureSuite;