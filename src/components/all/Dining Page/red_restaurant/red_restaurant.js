import './red_restaurant.css'
import { useState } from 'react'
import redRes1 from '../../../img/red-chinese-restaurant-1.jpg'
import redRes2 from '../../../img/red-chinese-restaurant-2.jpg'
import redRes3 from '../../../img/red-chinese-restaurant-3.jpg'
import redRes4 from '../../../img/red-chinese-restaurant-4.jpg'
import redRes5 from '../../../img/red-chinese-restaurant-5.jpg'
import redRes6 from '../../../img/red-chinese-restaurant-6.jpg'
import redRes7 from '../../../img/red-chinese-restaurant-7.jpg'
import redRes8 from '../../../img/red-chinese-restaurant-8.jpg'
import redRes9 from '../../../img/red-chinese-restaurant-9.jpg'
import redRes10 from '../../../img/red-chinese-restaurant-10.jpg'
import redRes11 from '../../../img/red-chinese-restaurant-11.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function RedRestaurant() {
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
    const [active10, setActive10 ] = useState('')
    const images = [redRes1, redRes2, redRes3, redRes4, redRes5, redRes6, redRes7, redRes8, redRes9, redRes10, redRes11]
    function handleNextClick() {
        if(img !== 11) {
            setImg(img + 1)
        }
        if(img === 10) {
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
            setActive10('active')
        } else {
            setActive10('')
        }
        if(img === 10) {
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
            setImg(10)
        }
        if(img === 0) {
            setActive10('active')
        } else {
            setActive10('')
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
        if(img === 10) {
            setActive9('active')
        } else {
            setActive9('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
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
        setActive10('')
    }
    function imgClickChange10() {
        setImg(10)
        setActive0('')
        setActive1('')
        setActive2('')
        setActive3('')
        setActive4('')
        setActive5('')
        setActive6('')
        setActive7('')
        setActive8('')
        setActive9('')
        setActive10('active')
    }
    return(
        <div className='red-restaurant'>
            <p className='red-res-p'>
                <div className='red-res-hdr'>
                <h1 className='blue'>Red Chinese Restaurant</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='red-ga'>
                <div className='red-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='red-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Red Chinese Restaurant</figcaption>
                    </figure>
                </div>
                <div className='red-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={redRes1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={redRes2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={redRes3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={redRes4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={redRes5} alt=""/>
                    </div>
                    <div className={active5} onClick={imgClickChange5} >
                    <img src={redRes6} alt=""/>
                    </div>
                    <div className={active6} onClick={imgClickChange6} >
                    <img src={redRes7} alt=""/>
                    </div>
                    <div className={active7} onClick={imgClickChange7} >
                    <img src={redRes8} alt=""/>
                    </div>
                    <div className={active8} onClick={imgClickChange8} >
                    <img src={redRes9} alt=""/>
                    </div>
                    <div className={active9} onClick={imgClickChange9} >
                    <img src={redRes10} alt=""/>
                    </div>
                    <div className={active10} onClick={imgClickChange10} >
                    <img src={redRes11} alt=""/>
                    </div>
                </div>
                </section>
                <section className='red-info'>
                    <div>RED CHINESE RESTAURANT</div>
                    <p>RED Chinese Restaurant & Lounge offers a unique dining experience in the day time and becomes the perfect night Lounge until the morning.</p>
                    <p>It serves authentic Chinese cuisine formal style. Located at the rooftop Convention Centre, you would LOVE the breath taking view of the Atlantic. It was dressed to impress you!</p>
                    <p>
                    Open Daily for:
                    <ul>
                    <li><strong>Lunch:</strong>12noon – 3pm</li>
                    <li><strong>Dinner:</strong>6pm -10.00pm</li>
                    </ul>
                    </p>
                </section>
            </main>
        </div>
    )
}
export default RedRestaurant;