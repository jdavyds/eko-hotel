import { useState } from 'react'
import { Link } from 'react-router-dom'
import './recreation.css'
import gym from '../../img/gym.jpg'
import spa from '../../img/spa.jpg'
import swimmingPool from '../../img/swimming-pool.jpg'
import basketballCourt from '../../img/basketball-court.jpg'
import saloon from '../../img/saloon.jpg'
import volleyballCourt from '../../img/volleyball-court.jpg'
import tennisCourt from '../../img/tennis-court.jpg'
import { FiberManualRecord } from '@material-ui/icons'
function Recreation() {
    const [ one, setOne ] = useState('nav-dot active')
    const [ two, setTwo ] = useState('nav-dot')
    const [ three, setThree ] = useState('nav-dot')
    const [ four, setFour ] = useState('nav-dot')
    const [trans, setTrans] = useState(0)
    let style = {
        transform: 'translateX('+ trans +'% )'
    }
    
    function dotOne(e) {
        setTrans(
            trans => 0
        )
        setTwo('nav-dot')
        setThree('nav-dot')
        setFour('nav-dot')
        setOne('nav-dot active')
    }
    function dotTwo() {
        setTrans(
            trans => -220
        )
        setOne('nav-dot')
        setThree('nav-dot')
        setFour('nav-dot')
        setTwo('nav-dot active')
    }
    function dotThree() {
        setTrans(
            trans => -435
        )
        setOne('nav-dot')
        setTwo('nav-dot')
        setFour('nav-dot')
        setThree('nav-dot active')
    }
    function dotFour() {
        setTrans(
            trans => -545
        )
        setOne('nav-dot')
        setTwo('nav-dot')
        setThree('nav-dot')
        setFour('nav-dot active')
    }
    return(
        <div className='recreation'>
            <p className='rct-p'>
                <div className='rct-hdr'>
                <h1 className='grey'>RECREATIONAL</h1>
                <h1 className='brown'>SERVICES</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <div className='rct-div' >
                <section className='rct-sec' style={style}>
                    <img src={gym} alt="gym" />
                    <div>
                        <h4><Link to='/gymnasium'> Gymnasium </Link> </h4> 
                        <p>Our well-equipped gym with sauna rooms are accessible to our in-house fit fam junkies, and comes with an available instructor.</p>
                    </div>
                </section>
                <section className='rct-sec'style={style}>
                    <img src={swimmingPool} alt="pool" />
                    <div>
                        <h4><Link to='/swimming-pool'> Swimming Pool </Link></h4> 
                        <p>Additional perks of being an in-house guest is to enjoy a day or night time swim. Access to the pool for outside guests are at additional cost.</p>
                    </div>
                </section>
                <section className='rct-sec' style={style}>
                    <img src={tennisCourt} alt="tennis court" />
                    <div>
                        <h4><Link to='/tennis-court'> Tennis Court </Link></h4> 
                        <p>Our flood-lit court is accessible for more leisure time. Access to the court for outside guests, and tennis lessons are available at an additional cost per hour.</p>
                    </div>
                </section>
                <section className='rct-sec' style={style}>
                    <img src={spa} alt="spa" />
                    <div>
                        <h4><Link to='/spa'> Spa </Link></h4> 
                        <p>You are invited to experience a variety of relaxing wellness treatment, from massages to getting your hair and nails done. These pampering sessions guarantee a memorable stay with us.</p>
                    </div>
                </section>
                <section className='rct-sec' style={style}>
                    <img src={basketballCourt} alt="basketball court" />
                    <div>
                        <h4><Link to='/basketball-court'> Basketball Court </Link></h4> 
                        <p>Enjoy shooting hoops at the court for more leisure time. Acess to the court for outside guests are at an additional cost.</p>
                    </div>
                </section>
                <section className='rct-sec' style={style}>
                    <img src={volleyballCourt} alt="volleyball court" />
                    <div>
                        <h4><Link to='/volleyball-court'> Volleyball Court </Link></h4> 
                        <p>In-house guest have free access to the court to enjoy more recreation time. Access to the court for outside guests are at an additional cost.</p>
                    </div>
                </section>
                <section className='rct-sec' style={style}>
                    <img src={saloon} alt="saloon" />
                    <div>
                        <h4><Link to='/saloon-and-nail-studio'> Saloon & Nail Studio </Link></h4> 
                        <p>You are invited to experience a variety of relaxing wellness treatment, from massages to getting your hair and nails done. These pampering sessions guarantee a memorable stay with us.</p>
                    </div>
                </section>
            </div>
            <nav className='rct-nav'>
                <FiberManualRecord className={one} 
                onClick={dotOne}
                /> <FiberManualRecord className={two} 
                onClick={dotTwo}
                /> <FiberManualRecord className={three} 
                onClick={dotThree}
                /> <FiberManualRecord className={four} 
                onClick={dotFour}
                />
            </nav>
        </div>
        )
}
export default Recreation;