import './sky_restaurant.css'
import { useState } from 'react'
import skyRes1 from '../../../img/sky-restaurant-img-1.jpg'
import skyRes2 from '../../../img/sky-restaurant-img-2.jpg'
import skyRes3 from '../../../img/sky-restaurant-img-3.jpg'
import skyRes4 from '../../../img/sky-restaurant-img-4.jpg'
import skyRes5 from '../../../img/sky-restaurant-img-5.jpg'
import skyRes6 from '../../../img/sky-restaurant-img-6.jpg'
import skyRes7 from '../../../img/sky-restaurant-img-7.jpg'
import skyRes8 from '../../../img/sky-restaurant-img-8.jpg'
import skyRes9 from '../../../img/sky-restaurant-img-9.jpg'
import skyRes10 from '../../../img/sky-restaurant-img-10.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function SkyRestaurant() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const [active4, setActive4 ] = useState('')
    const [active5, setActive5 ] = useState('')
    const [active6, setActive6 ] = useState('')
    const [active7, setActive7 ] = useState('')
    const [active8, setActive8 ] = useState('')
    const [active9, setActive9 ] = useState('')
    const images = [skyRes1, skyRes2, skyRes3, skyRes4, skyRes5, skyRes6, skyRes7, skyRes8, skyRes9, skyRes10]
    function handleNextClick() {
        if(img !== 10) {
            setImg(img + 1)
        }
        if(img === 9) {
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
            setActive5('active')
        } else {
            setActive5('')
        }
        if(img === 5) {
            setActive6('active')
        } else {
            setActive6('')
        }
        if(img === 6) {
            setActive7('active')
        } else {
            setActive7('')
        }
        if(img === 7) {
            setActive8('active')
        } else {
            setActive8('')
        }
        if(img === 8) {
            setActive9('active')
        } else {
            setActive9('')
        }
        if(img === 9) {
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
            setImg(9)
        }
        if(img === 0) {
            setActive9('active')
        } else {
            setActive9('')
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
        if(img === 5) {
            setActive4('active')
        } else {
            setActive4('')
        }
        if(img === 6) {
            setActive5('active')
        } else {
            setActive5('')
        }
        if(img === 7) {
            setActive6('active')
        } else {
            setActive6('')
        }
        if(img === 8) {
            setActive7('active')
        } else {
            setActive7('')
        }
        if(img === 9) {
            setActive8('active')
        } else {
            setActive8('')
        }
    }
    function imgClickChange0() {
        setImg(0)
        setActive0('active')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange1() {
        setImg(1)
        setActive0('')
        setActive1('active')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange2() {
        setImg(2)
        setActive0('')
        setActive1('')
        setActive2('active')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange3() {
        setImg(3)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('active')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange4() {
        setImg(4)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('active')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange5() {
        setImg(5)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('active')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange6() {
        setImg(6)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('active')
        setActive7('')
        setActive8('')
        setActive9('')
    }
    function imgClickChange7() {
        setImg(7)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('active')
        setActive8('')
        setActive9('')
    }
    function imgClickChange8() {
        setImg(8)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('active')
        setActive9('')
    }
    function imgClickChange9() {
        setImg(9)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('active')
    }
    return(
        <div className='sky-restaurant'>
            <p className='sky-res-p'>
                <div className='sky-res-hdr'>
                <h1 className='blue'>The Sky Restaurant</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='sky-ga'>
                <div className='sky-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='sky-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>The Sky Restaurant</figcaption>
                    </figure>
                </div>
                <div className='sky-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={skyRes1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={skyRes2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={skyRes3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={skyRes4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={skyRes5} alt=""/>
                    </div>
                    <div className={active5} onClick={imgClickChange5} >
                    <img src={skyRes6} alt=""/>
                    </div>
                    <div className={active6} onClick={imgClickChange6} >
                    <img src={skyRes7} alt=""/>
                    </div>
                    <div className={active7} onClick={imgClickChange7} >
                    <img src={skyRes8} alt=""/>
                    </div>
                    <div className={active8} onClick={imgClickChange8} >
                    <img src={skyRes9} alt=""/>
                    </div>
                    <div className={active9} onClick={imgClickChange9} >
                    <img src={skyRes10} alt=""/>
                    </div>
                </div>
                </section>
                <section className='sky-info'>
                    <div>THE SKY RESTAURANT</div>
                    <p>Situated at the tallest Penthouse of Eko Hotel, the Sky Restaurant has a 'wow' factor that is hard to dispute. It's about the highest restaurant in the city of Lagos and has a picturesque view of both the city and the Atlantic Ocean.</p>
                    <p>It offers Asian fusion menu delicacies! Get pampered by our award winning chef as he performs his art with a fusion of culinary traditions that combines different cuisines from the south-eastern/Asian region into a single eating experience. It seats 130 people dining</p>
                    <p>
                    Open Daily for:
                    <ul>
                    <li><strong>Lunch:</strong>12noon – 3pm (excluding Sundays)</li>
                    <li><strong>Dinner:</strong>6pm -10.30pm</li>
                    <li><strong>Bar:</strong>12noon – 1am</li>
                    </ul>
                    </p>
                    <p>For reservations, please call: <b>012772700 </b> ext: 6370</p>
                </section>
            </main>
        </div>
    )
}
export default SkyRestaurant;