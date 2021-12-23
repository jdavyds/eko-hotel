import './spa.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiberManualRecord } from '@material-ui/icons'
import spa1 from '../../../img/spa-1.jpg'
import spa2 from '../../../img/spa-2.jpg'
import spa3 from '../../../img/spa-3.jpg'

function Spa() {
    const [ spaImg1, setSpaImg1 ] = useState('spa1 active')
    const [ spaImg2, setSpaImg2 ] = useState('spa2')
    const [ spaImg3, setSpaImg3 ] = useState('spa3')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    function spaDot1() {
        setSpaImg1('spa1 active')
        setSpaImg2('spa2')
        setSpaImg3('spa3')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
    }
    function spaDot2() {
        setSpaImg1('spa1')
        setSpaImg2('spa2 active')
        setSpaImg3('spa3')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
    }
    function spaDot3() {
        setSpaImg1('spa1')
        setSpaImg2('spa2')
        setSpaImg3('spa3 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
    }
    return(
        <div className="spa">
            <div className='cont'>
                <h1>SPA</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / SPA
                </nav>
            </div>
            <p className='spa-p'>
                <div className='spa-hdr'>
                <h1 className='brown'>SPA</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="spa-gallery">
            <nav>
            <img src={spa1} alt="" className={spaImg1}/>
            <img src={spa2} alt="" className={spaImg2}/>
            <img src={spa3} alt="" className={spaImg3}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={spaDot1} className={dot1}
                /> <FiberManualRecord onClick={spaDot2} className={dot2}
                /> <FiberManualRecord onClick={spaDot3} className={dot3} />
            </nav>
            </section>
            <section className='spa-info'>
            <div>DETAILS</div>
            <p>You are cordially invited to experience relaxing massages anytime at Eko Spa.</p>
            <p>Our variety of pampering sessions guarantee a memorable stay with us..</p>
            <p>Opening Time:
                <ul>
                    <li><strong> Mondays – Saturdays Spa(10am – 8pm) Saloon(9am - 8pm) </strong></li>
                    <li><strong> Sundays: Spa(11am - 8pm) Saloon(12noon – 8pm)</strong></li>
                </ul>
            </p>
            </section>
        </div>
    )
}
export default Spa;