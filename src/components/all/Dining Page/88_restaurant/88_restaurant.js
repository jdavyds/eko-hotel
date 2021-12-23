import './88_restaurant.css'
import { useState } from 'react'
import eighty8Res1 from '../../../img/88-restaurant-1.jpg'
import eighty8Res2 from '../../../img/88-restaurant-2.jpg'
import eighty8Res3 from '../../../img/88-restaurant-3.jpg'
import eighty8Res4 from '../../../img/88-restaurant-4.jpg'
import eighty8Res5 from '../../../img/88-restaurant-5.jpg'
import eighty8Res6 from '../../../img/88-restaurant-6.jpg'
import eighty8Res7 from '../../../img/88-restaurant-7.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function Eighty8Restaurant() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const [active4, setActive4 ] = useState('')
    const [active5, setActive5 ] = useState('')
    const [active6, setActive6 ] = useState('')
    const images = [eighty8Res1, eighty8Res2, eighty8Res3, eighty8Res4, eighty8Res5, eighty8Res6, eighty8Res7]
    function handleNextClick() {
        if(img !== 7) {
            setImg(img + 1)
        }
        if(img === 6) {
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
            setImg(6)
        }
        if(img === 0) {
            setActive6('active')
        } else {
            setActive6('')
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
    }
    return(
        <div className='eighty8-restaurant'>
            <p className='eighty8-res-p'>
                <div className='eighty8-res-hdr'>
                <h1 className='blue'>88 Restaurant</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='eighty8-ga'>
                <div className='eighty8-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='eighty8-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>88 Restaurant</figcaption>
                    </figure>
                </div>
                <div className='eighty8-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={eighty8Res1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={eighty8Res2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={eighty8Res3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={eighty8Res4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={eighty8Res5} alt=""/>
                    </div>
                    <div className={active5} onClick={imgClickChange5} >
                    <img src={eighty8Res6} alt=""/>
                    </div>
                    <div className={active6} onClick={imgClickChange6} >
                    <img src={eighty8Res7} alt=""/>
                    </div>
                </div>
                </section>
                <section className='eighty8-info'>
                    <div>88 RESTAURANT</div>
                    <p>The 88 Restaurant is an infusion of afro-centric food culture. The menu is the brain-child of our British Nigerian chef using his Mama’s recipes and is derived from local Nigerian dishes. Every meal is pure passion on a plate, from our plantain coquettes to our Asun pizza inspired by and celebrating the African lifestyle. Enjoy an amazing interpretation of Nigerian food with a twist.</p>
                    <p>
                    Open Daily for:
                    <ul>
                    <li><strong>Breakfast:</strong>6.00am – 10.30am</li>
                    <li><strong>Lunch:</strong>12noon – 3pm</li>
                    <li><strong>Dinner:</strong>6pm -10.30pm</li>
                    </ul>
                    </p>
                    <p><strong>Temporarily closed</strong>,Kindly place an order through our Eko Delivery service</p>
                </section>
            </main>
        </div>
    )
}
export default Eighty8Restaurant;