import './calabash_bar.css'
import { useState } from 'react'
import calabashBar1 from '../../../img/calabash-bar-1.jpg'
import calabashBar2 from '../../../img/calabash-bar-2.jpg'
import calabashBar3 from '../../../img/calabash-bar-3.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function CalabashBar() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const images = [calabashBar1, calabashBar2, calabashBar3]
    function handleNextClick() {
        if(img !== 3) {
            setImg(img + 1)
        }
        if(img === 2) {
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
            setImg(2)
        }
        if(img === 0) {
            setActive2('active')
        } else {
            setActive2('')
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
    }
    function imgClickChange0() {
        setImg(0)
        setActive0('active')
        setActive1('')
        setActive2('')
    }
    function imgClickChange1() {
        setImg(1)
        setActive0('')
        setActive1('active')
        setActive2('')
    }
    function imgClickChange2() {
        setImg(2)
        setActive0('')
        setActive1('')
        setActive2('active')
    }
    return(
        <div className='calabash-bar'>
            <p className='calabash-bar-p'>
                <div className='calabash-bar-hdr'>
                <h1 className='blue'>Calabash Bar</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='calabash-bar-ga'>
                <div className='calabash-bar-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='calabash-bar-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Calabash Bar</figcaption>
                    </figure>
                </div>
                <div className='calabash-bar-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={calabashBar1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={calabashBar2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={calabashBar3} alt=""/>
                    </div>
                </div>
                </section>
                <section className='calabash-bar-info'>
                    <div>CALABASH BAR</div>
                    <p>The Calabash bar is the ideal bar to wind down and relax after an activity-filled day. A place to meet interesting people, enjoy a drink with colleagues and be entertained by our resident band and musicians.</p>
                    <p>Aesthetically designed after the traditional decor of calabashes, experience the gentle breeze of the Atlantic soothing your senses.</p>
                    <p>Enjoy your drink, have a nibble and let your mind travel through the African night sky. Prominently located beside Kuramo Sports Cafe, the Calabash Bar offers a wide range of drinks and also serves food from the sports cafe as well as the Lagoon Breeze Restaurant and seats up to 96.</p>
                    <p><strong>Open Daily for:</strong>8.00am – 2.00am</p>
                </section>
            </main>
        </div>
    )
}
export default CalabashBar;