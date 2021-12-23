import './swimming_pool.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiberManualRecord } from '@material-ui/icons'
import pool1 from '../../../img/swimming-pool-1.jpg'
import pool2 from '../../../img/swimming-pool-3.jpg'
import pool3 from '../../../img/swimming-pool-4.jpg'
import pool4 from '../../../img/swimming-pool-5.jpg'
import pool5 from '../../../img/swimming-pool-6.jpg'
import pool6 from '../../../img/swimming-pool-7.jpg'

function SwimmingPool() {
    const [ poolImg1, setPoolImg1 ] = useState('pool1 active')
    const [ poolImg2, setPoolImg2 ] = useState('pool2')
    const [ poolImg3, setPoolImg3 ] = useState('pool3')
    const [ poolImg4, setPoolImg4 ] = useState('pool4')
    const [ poolImg5, setPoolImg5 ] = useState('pool5')
    const [ poolImg6, setPoolImg6 ] = useState('pool6')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    const [ dot5, setDot5 ] = useState('dot5')
    const [ dot6, setDot6 ] = useState('dot6')
    function poolDot1() {
        setPoolImg1('pool1 active')
        setPoolImg2('pool2')
        setPoolImg3('pool3')
        setPoolImg4('pool4')
        setPoolImg5('pool5')
        setPoolImg6('pool6')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
    }
    function poolDot2() {
        setPoolImg1('pool1')
        setPoolImg2('pool2 active')
        setPoolImg3('pool3')
        setPoolImg4('pool4')
        setPoolImg5('pool5')
        setPoolImg6('pool6')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
    }
    function poolDot3() {
        setPoolImg1('pool1')
        setPoolImg2('pool2')
        setPoolImg3('pool3 active')
        setPoolImg4('pool4')
        setPoolImg5('pool5')
        setPoolImg6('pool6')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6')
    }
    function poolDot4() {
        setPoolImg1('pool1')
        setPoolImg2('pool2')
        setPoolImg3('pool3')
        setPoolImg4('pool4 active')
        setPoolImg5('pool5')
        setPoolImg6('pool6')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
        setDot5('dot5')
        setDot6('dot6')
    }
    function poolDot5() {
        setPoolImg1('pool1')
        setPoolImg2('pool2')
        setPoolImg3('pool3')
        setPoolImg4('pool4')
        setPoolImg5('pool5 active')
        setPoolImg6('pool6')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5 active')
        setDot6('dot6')
    }
    function poolDot6() {
        setPoolImg1('pool1')
        setPoolImg2('pool2')
        setPoolImg3('pool3')
        setPoolImg4('pool4')
        setPoolImg5('pool5')
        setPoolImg6('pool6 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
        setDot5('dot5')
        setDot6('dot6 active')
    }

    return(
        <div className="swimming-pool">
            <div className='cont'>
                <h1>SWIMMING POOL</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / Swimming Pool
                </nav>
            </div>
            <p className='pool-p'>
                <div className='pool-hdr'>
                <h1 className='brown'>SWIMMING POOL</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="pool-gallery">
            <nav>
            <img src={pool1} alt="" className={poolImg1}/>
            <img src={pool2} alt="" className={poolImg2}/>
            <img src={pool3} alt="" className={poolImg3}/>
            <img src={pool4} alt="" className={poolImg4}/>
            <img src={pool5} alt="" className={poolImg5}/>
            <img src={pool6} alt="" className={poolImg6}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={poolDot1} className={dot1}
                /> <FiberManualRecord onClick={poolDot2} className={dot2}
                /> <FiberManualRecord onClick={poolDot3} className={dot3}
                /> <FiberManualRecord onClick={poolDot4} className={dot4}
                /> <FiberManualRecord onClick={poolDot5} className={dot5}
                /> <FiberManualRecord onClick={poolDot6} className={dot6}/>
            </nav>
            </section>
            <section className='pool-info'>
            <div>DETAILS</div>
            <p>Additional perks of being an in-house guest is to enjoy a day or night time swim. Access to the pool for outside guests are at an additional cost.</p>
            <p><strong>Opening Time:</strong> Monday – Sunday (8am – 8pm)</p>
            </section>
        </div>
    )
}
export default SwimmingPool;