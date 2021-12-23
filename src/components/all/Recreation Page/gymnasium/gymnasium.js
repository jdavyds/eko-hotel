import './gymnasium.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiberManualRecord } from '@material-ui/icons'
import gym1 from '../../../img/gym-1.jpg'
import gym2 from '../../../img/gym-2.jpg'
import gym3 from '../../../img/gym-3.jpg'
import gym4 from '../../../img/gym-4.jpg'

function Gymnasium() {
    const [ gymImg1, setGymImg1 ] = useState('gym1 active')
    const [ gymImg2, setGymImg2 ] = useState('gym2')
    const [ gymImg3, setGymImg3 ] = useState('gym3')
    const [ gymImg4, setGymImg4 ] = useState('gym4')
    const [ dot1, setDot1 ] = useState('dot1 active')
    const [ dot2, setDot2 ] = useState('dot2') 
    const [ dot3, setDot3 ] = useState('dot3')
    const [ dot4, setDot4 ] = useState('dot4')
    function gymDot1() {
        setGymImg1('gym1 active')
        setGymImg2('gym2')
        setGymImg3('gym3')
        setGymImg4('gym4')
        setDot1('dot1 active')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4')
    }
    function gymDot2() {
        setGymImg1('gym1')
        setGymImg2('gym2 active')
        setGymImg3('gym3')
        setGymImg4('gym4')
        setDot1('dot1')
        setDot2('dot2 active')
        setDot3('dot3')
        setDot4('dot4')
    }
    function gymDot3() {
        setGymImg1('gym1')
        setGymImg2('gym2')
        setGymImg3('gym3 active')
        setGymImg4('gym4')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3 active')
        setDot4('dot4')
    }
    function gymDot4() {
        setGymImg1('gym1')
        setGymImg2('gym2')
        setGymImg3('gym3')
        setGymImg4('gym4 active')
        setDot1('dot1')
        setDot2('dot2')
        setDot3('dot3')
        setDot4('dot4 active')
    }
    return(
        <div className="gymnasium">
            <div className='cont'>
                <h1>GYMNASIUM</h1>
                <nav>
                    <Link to='/'>Home</Link>/ <Link to='/recreational-services'> Recreational Services</Link> / Gymnasium
                </nav>
            </div>
            <p className='gym-p'>
                <div className='gym-hdr'>
                <h1 className='brown'>GYMNASIUM</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="gym-gallery">
            <nav>
            <img src={gym1} alt="" className={gymImg1}/>
            <img src={gym2} alt="" className={gymImg2}/>
            <img src={gym3} alt="" className={gymImg3}/>
            <img src={gym4} alt="" className={gymImg4}/>
            </nav>
            <nav className='rct-nav'>
                <FiberManualRecord onClick={gymDot1} className={dot1}
                /> <FiberManualRecord onClick={gymDot2} className={dot2}
                /> <FiberManualRecord onClick={gymDot3} className={dot3}
                /> <FiberManualRecord onClick={gymDot4} className={dot4}/>
            </nav>
            </section>
            <section className='gym-info'>
            <div>DETAILS</div>
            <p>Our well-equipped gym with steaming rooms are accessible to our in-house fit fam junkies, and comes with an available instructor. Access to the gym for outside guests are only available to members only.</p>
            <p><strong>Opening Time:</strong> Monday – Sunday (7am – 8pm)</p>
            </section>
        </div>
    )
}
export default Gymnasium;