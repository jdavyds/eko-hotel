import './kuramo_sports.css'
import { useState } from 'react'
import kuramoSports1 from '../../../img/kuramo-sports-cafe-1.jpg'
import kuramoSports2 from '../../../img/kuramo-sports-cafe-2.jpg'
import kuramoSports3 from '../../../img/kuramo-sports-cafe-3.jpg'
import kuramoSports4 from '../../../img/kuramo-sports-cafe-4.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function KuramoSportsCafe() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const images = [kuramoSports1, kuramoSports2, kuramoSports3, kuramoSports4]
    function handleNextClick() {
        if(img !== 4) {
            setImg(img + 1)
        }
        if(img === 3) {
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
            setImg(3)
        }
        if(img === 0) {
            setActive3('active')
        } else {
            setActive3('')
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
    }
    function imgClickChange0() {
        setImg(0)
        setActive0('active')
        setActive1('')
        setActive2('')
        setActive3('')
    }
    function imgClickChange1() {
        setImg(1)
        setActive0('')
        setActive1('active')
        setActive2('')
        setActive3('')
    }
    function imgClickChange2() {
        setImg(2)
        setActive0('')
        setActive1('')
        setActive2('active')
        setActive3('')
    }
    function imgClickChange3() {
        setImg(3)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('active')
    }
    return(
        <div className='kuramo-sports-cafe'>
            <p className='kuramo-sports-cafe-p'>
                <div className='kuramo-sports-cafe-hdr'>
                <h1 className='blue'>Kuramo Sports Cafe</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='kuramo-sports-ga'>
                <div className='kuramo-sports-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='kuramo-sports-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Kuramo Sports Cafe</figcaption>
                    </figure>
                </div>
                <div className='kuramo-sports-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={kuramoSports1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={kuramoSports2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={kuramoSports3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={kuramoSports4} alt=""/>
                    </div>
                </div>
                </section>
                <section className='kuramo-sports-info'>
                    <div>KURAMO SPORTS CAFE </div>
                    <p>While watching a game on one of Kuramo Sports Café’s huge plasma screens, you can enjoy the best buffet in Lagos!</p>
                    <p>Feast your eyes on a cornucopia of mouth-watering continental and local Nigerian dishes arrayed buffet-style.</p>
                    <p>
                    <p>An endless showcase of choice options will certainly satisfy even the most demanding of palates. If you have a large family or group to feed, then our buffet spread is the best way to do it.</p>
                    Open Daily for:
                    <ul>
                    <li><strong>Breakfast:</strong>6.00am – 10.30am</li>
                    <li><strong>Lunch:</strong>12noon – 4pm</li>
                    <li><strong>Dinner:</strong>6pm -11.00pm</li>
                    <li><strong>Sunday Brunch:</strong>12noon – 4.00pm</li>
                    <li><strong>Weekends & Public holidays:</strong>6.00pm – 11.00pm</li>
                    </ul>
                    </p>
                </section>
            </main>
        </div>
    )
}
export default KuramoSportsCafe;