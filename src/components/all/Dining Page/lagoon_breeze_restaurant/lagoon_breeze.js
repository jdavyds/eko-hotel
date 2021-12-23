import './lagoon_breeze.css'
import { useState } from 'react'
import lagoonBreeze1 from '../../../img/lagoon-breeze-1.jpg'
import lagoonBreeze2 from '../../../img/lagoon-breeze-2.jpg'
import lagoonBreeze3 from '../../../img/lagoon-breeze-3.jpg'
import lagoonBreeze4 from '../../../img/lagoon-breeze-4.jpg'
import lagoonBreeze5 from '../../../img/lagoon-breeze-5.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function LagoonBreeze() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const [active4, setActive4 ] = useState('')
    const images = [lagoonBreeze1, lagoonBreeze2, lagoonBreeze3, lagoonBreeze4, lagoonBreeze5]
    function handleNextClick() {
        if(img !== 5) {
            setImg(img + 1)
        }
        if(img === 4) {
            setImg(0)
        }
        if(img === 0) {
            setActive1('active')
        } else {
            setActive1('')
        }
        if(img === 1) {
            setActive2('active')
        } else {
            setActive2('')
        }
        if(img === 2) {
            setActive3('active')
        } else {
            setActive3('')
        }
        if(img === 3) {
            setActive4('active')
        } else {
            setActive4('')
        }
        if(img === 4) {
            setActive0('active')
        } else {
            setActive0('')
        }
    }
    function handlePrevClick() {
        if(img !== 0) {
            setImg(img - 1)
        }
        if(img === 0) {
            setImg(4)
        }
        if(img === 0) {
            setActive4('active')
        } else {
            setActive4('')
        }
        if(img === 1) {
            setActive0('active')
        } else {
            setActive0('')
        }
        if(img === 2) {
            setActive1('active')
        } else {
            setActive1('')
        }
        if(img === 3) {
            setActive2('active')
        } else {
            setActive2('')
        }
        if(img === 4) {
            setActive3('active')
        } else {
            setActive3('')
        }
    }
    function imgClickChange0() {
        setImg(0)
        setActive0('active')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
    }
    function imgClickChange1() {
        setImg(1)
        setActive0('')
        setActive1('active')
        setActive2('')
        setActive3('')
        setActive4('')
    }
    function imgClickChange2() {
        setImg(2)
        setActive0('')
        setActive1('')
        setActive2('active')
        setActive3('')
        setActive4('')
    }
    function imgClickChange3() {
        setImg(3)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('active')
        setActive4('')
    }
    function imgClickChange4() {
        setImg(4)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('active')
    }
    return(
        <div className='lagoon-breeze-restaurant'>
            <p className='lagoon-breeze-res-p'>
                <div className='lagoon-breeze-res-hdr'>
                <h1 className='blue'>Lagoon Breeze</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='lagoon-breeze-ga'>
                <div className='lagoon-breeze-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='lagoon-breeze-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Lagoon Breeze</figcaption>
                    </figure>
                </div>
                <div className='lagoon-breeze-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={lagoonBreeze1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={lagoonBreeze2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={lagoonBreeze3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={lagoonBreeze4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={lagoonBreeze5} alt=""/>
                    </div>
                </div>
                </section>
                <section className='lagoon-breeze-info'>
                    <div>LAGOON BREEZE</div>
                    <p>Located by the swimming pool, the Lagoon Breeze Restaurant is loved by those who know Lagos and appreciate nicely prepared grills.</p>
                    <p>Come and enjoy the soothing breeze of the Atlantic Ocean and enjoy suya, pizzas; a wide variety of drinks and friendlier relaxed service.</p>
                    <p>Sit amidst the lavish pool side of the Eko Hotel oasis. The breezy pool side bar and grill offers a casual yet all fresco dining with a view of the Atlantic Ocean at night under a canopy of stars.</p>
                    <p><strong>Open:</strong>Monday to Friday</p>
                    <p><strong>Time:</strong>2pm – 12am</p>
                    <p><strong>Saturdays & Sundays:</strong>12noon -11.00pm</p>
                    <p><strong>Public holidays:</strong>12noon – 11.00pm</p>
                </section>
            </main>
        </div>
    )
}
export default LagoonBreeze;