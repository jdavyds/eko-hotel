import './lagos_irish.css'
import { useState } from 'react'
import lagIrish1 from '../../../img/lagos-irish-pub-0.jpg'
import lagIrish2 from '../../../img/lagos-irish-pub-1.jpg'
import lagIrish3 from '../../../img/lagos-irish-pub-2.jpg'
import lagIrish4 from '../../../img/lagos-irish-pub-3.jpg'
import lagIrish5 from '../../../img/lagos-irish-pub-4.jpg'
import lagIrish6 from '../../../img/lagos-irish-pub-5.jpg'
import lagIrish7 from '../../../img/lagos-irish-pub-6.jpg'
import lagIrish8 from '../../../img/lagos-irish-pub-7.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'
function LagosIrish() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const [active4, setActive4 ] = useState('')
    const [active5, setActive5 ] = useState('')
    const [active6, setActive6 ] = useState('')
    const [active7, setActive7 ] = useState('')
    const images = [lagIrish1, lagIrish2, lagIrish3, lagIrish4, lagIrish5, lagIrish6, lagIrish7, lagIrish8]
    function handleNextClick() {
        if(img !== 8) {
            setImg(img + 1)
        }
        if(img === 7) {
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
            setImg(7)
        }
        if(img === 0) {
            setActive7('active')
        } else {
            setActive7('')
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
    }    
    return(
        <div className="lagos-irish-pub">
            <p className='lag-irish-p'>
                <div className='lag-irish-hdr'>
                <h1 className='blue'>Lagos Irish Pub</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
            <section className='lag-irish-ga'>
                <div className='lag-irish-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='lag-irish-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Lagos Irish Pub</figcaption>
                    </figure>
                </div>
                <div className='lag-irish-album'>
                    <div className={active0} onClick={imgClickChange0} >
                   <img src={lagIrish1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={lagIrish2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={lagIrish3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={lagIrish4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={lagIrish5} alt=""/>
                    </div>
                    <div className={active5} onClick={imgClickChange5} >
                    <img src={lagIrish6} alt=""/>
                    </div>
                    <div className={active6} onClick={imgClickChange6} >
                    <img src={lagIrish7} alt=""/>
                    </div>
                    <div className={active7} onClick={imgClickChange7} >
                    <img src={lagIrish8} alt=""/>
                    </div>
                </div>
                </section>
                <section className='lag-irish-info'>
                    <div>LAGOS IRISH PUB</div>
                    <p>Lagos Irish Pub is a charming wooden traditional pub with live music and an outdoor patio. Enjoy a pint and a large selection of original Irish whiskies and pub grub with friends or friendly strangers. Perfect for after work drinks or watching a game with lads.</p>
                    <p>
                    Open Daily:
                    <ul>
                    <li><strong>Weekdays:</strong>4.00pm - 2.00am</li>
                    <li><strong>Weekends:</strong>11.00am - 2.00am</li>
                    </ul>
                    </p>
                </section>
            </main>
        </div>
    )
}
export default LagosIrish;