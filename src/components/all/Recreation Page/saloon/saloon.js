import './saloon.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiberManualRecord } from '@material-ui/icons'
import saloon1 from '../../../img/saloon-1.jpg'
import saloon2 from '../../../img/saloon-2.jpg'
import saloon3 from '../../../img/saloon-3.jpg'
import saloon4 from '../../../img/saloon-4.jpg'

function Saloon() {
    const [ saloonImg1, setSaloonImg1 ] = useState('saloon1 active')
    const [ saloonImg2, setSaloonImg2 ] = useState('saloon2')
    const [ saloonImg3, setSaloonImg3 ] = useState('saloon3')
    const [ saloonImg4, setSaloonImg4 ] = useState('saloon4')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    function saloonDot1() {
        setSaloonImg1('saloon1 active')
        setSaloonImg2('saloon2')
        setSaloonImg3('saloon3')
        setSaloonImg4('saloon4')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
    }
    function saloonDot2() {
        setSaloonImg1('saloon1')
        setSaloonImg2('saloon2 active')
        setSaloonImg3('saloon3')
        setSaloonImg4('saloon4')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
    }
    function saloonDot3() {
        setSaloonImg1('saloon1')
        setSaloonImg2('saloon2')
        setSaloonImg3('saloon3 active')
        setSaloonImg4('saloon4')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
    }
    function saloonDot4() {
        setSaloonImg1('saloon1')
        setSaloonImg2('saloon2')
        setSaloonImg3('saloon3')
        setSaloonImg4('saloon4 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
    }
    return(
        <div className="saloon">
            <div className='cont'>
                <h1>SALOON & NAIL STUDIO</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / Saloon & Nail Studio
                </nav>
            </div>
            <p className='saloon-p'>
                <div className='saloon-hdr'>
                <h1 className='brown'>SALOON & NAIL STUDIO</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="saloon-gallery">
            <nav>
            <img src={saloon1} alt="" className={saloonImg1}/>
            <img src={saloon2} alt="" className={saloonImg2}/>
            <img src={saloon3} alt="" className={saloonImg3}/>
            <img src={saloon4} alt="" className={saloonImg4}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={saloonDot1} className={dot1}
                /> <FiberManualRecord onClick={saloonDot2} className={dot2}
                /> <FiberManualRecord onClick={saloonDot3} className={dot3}
                /> <FiberManualRecord onClick={saloonDot4} className={dot4}/>
            </nav>
            </section>
            <section className='saloon-info'>
            <div>DETAILS</div>
            <p>You are invited to experience a variety of relaxing wellness treatment, from massages to getting your hair and nails done. These pampering sessions guarantee a memorable stay with us.</p>
            <p>Opening Time:
                <ul>
                    <li><strong> Mondays – Saturdays (10am – 8pm)</strong></li>
                    <li><strong> Sundays (12noon – 8pm)</strong></li>
                </ul>
            </p>
            </section>
        </div>
    )
}
export default Saloon;