import './prime_restaurant.css'
import { useState } from 'react'
import primeResLogo from '../../../img/prime-restaurant-logo.png'
import primeRes1 from '../../../img/prime-steakhouse-1.jpg'
import primeRes2 from '../../../img/prime-steakhouse-2.jpg'
import primeRes3 from '../../../img/prime-steakhouse-3.jpg'
import primeRes4 from '../../../img/prime-steakhouse-4.jpg'
import primeRes5 from '../../../img/prime-steakhouse-5.jpg'
import primeRes6 from '../../../img/prime-steakhouse-6.jpg'
import primeRes7 from '../../../img/prime-steakhouse-7.jpg'
import primeRes8 from '../../../img/prime-steakhouse-8.jpg'
import primeRes9 from '../../../img/prime-steakhouse-9.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function PrimeRestaurant() {
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
    const images = [primeRes1, primeRes2, primeRes3, primeRes4, primeRes5, primeRes6, primeRes7, primeRes8, primeRes9]
    function handleNextClick() {
        if(img !== 9) {
            setImg(img + 1)
        }
        if(img === 8) {
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
            setImg(8)
        }
        if(img === 0) {
            setActive8('active')
        } else {
            setActive8('')
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
    }
    return(
        <div className='prime-restaurant'>
            <p className='prime-res-p'>
                <div className='prime-res-logo'>
                    <img src={primeResLogo} alt="" />
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
                <section className='prime-ga'>
                <div className='prime-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='prime-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Prime Restaurant</figcaption>
                    </figure>
                </div>
                <div className='prime-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={primeRes1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={primeRes2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={primeRes3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={primeRes4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={primeRes5} alt=""/>
                    </div>
                    <div className={active5} onClick={imgClickChange5} >
                    <img src={primeRes6} alt=""/>
                    </div>
                    <div className={active6} onClick={imgClickChange6} >
                    <img src={primeRes7} alt=""/>
                    </div>
                    <div className={active7} onClick={imgClickChange7} >
                    <img src={primeRes8} alt=""/>
                    </div>
                    <div className={active8} onClick={imgClickChange8} >
                    <img src={primeRes9} alt=""/>
                    </div>
                </div>
                </section>
                <section className='prime-info'>
                    <div>Prime RESTAURANT</div>
                    <p>Prime Restaurant is a steak and seafood experiential dining, that takes you on a journey of culinary excellence. The Bar and Lounge is designed for the discerning connoisseur of fine wines and spirits, while the café uses the world’s best coffee bean to curate all types of blends for the true lover of coffee</p>
                </section>
            </main>
        </div>
    )
}
export default PrimeRestaurant;