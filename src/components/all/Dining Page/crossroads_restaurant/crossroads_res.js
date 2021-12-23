import './crossroads_res.css'
import { useState } from 'react'
import CrossRoads1 from '../../../img/crossroads-restaurant-1.jpg'
import CrossRoads2 from '../../../img/crossroads-restaurant-2.jpg'
import CrossRoads3 from '../../../img/crossroads-restaurant-3.jpg'
import CrossRoads4 from '../../../img/crossroads-restaurant-4.jpg'
import CrossRoads5 from '../../../img/crossroads-restaurant-5.jpg'
import { ArrowBack, ArrowForward } from '@material-ui/icons'

function CrossRoads() {
    const [ img, setImg ] = useState(0)
    const [active0, setActive0 ] = useState('active')
    const [active1, setActive1 ] = useState('')
    const [active2, setActive2 ] = useState('')
    const [active3, setActive3 ] = useState('')
    const [active4, setActive4 ] = useState('')
    const images = [CrossRoads1, CrossRoads2, CrossRoads3, CrossRoads4, CrossRoads5]
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
        <div className="crossroad-restaurant">
            <p className='crossroad-res-p'>
                <div className='crossroad-res-hdr'>
                <h1 className='blue'>Crossroads Tex-Mex Restaurant & Bar</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main>
            <section className='crossroad-ga'>
                <div className='crossroad-gallery'>
                    <figure>
                    <button className='back' onClick={handlePrevClick}><ArrowBack className='back-icon'/></button>
                    <img src={images[img]} alt="" className='crossroad-img'/>
                    <button className='forward' onClick={handleNextClick}><ArrowForward className='forward-icon' /></button>
                    <figcaption>Crossroads Tex-Mex Restaurant & Bar</figcaption>
                    </figure>
                </div>
                <div className='crossroad-album'>
                    <div className={active0} onClick={imgClickChange0} >
                    <img src={CrossRoads1} alt=""/>
                    </div>
                    <div className={active1} onClick={imgClickChange1} >
                    <img src={CrossRoads2} alt=""/>
                    </div>
                    <div className={active2} onClick={imgClickChange2} >
                    <img src={CrossRoads3} alt=""/>
                    </div>
                    <div className={active3} onClick={imgClickChange3} >
                    <img src={CrossRoads4} alt=""/>
                    </div>
                    <div className={active4} onClick={imgClickChange4} >
                    <img src={CrossRoads5} alt=""/>
                    </div>
                    
                </div>
                </section>
                <section className='crossroad-info'>
                    <div>CROSSROADS TEX-MEX RESTAURANT & BAR</div>
                    <p>Nigeria’s leading Tex-Mex Restaurant and Bar in the heart of the city! Crossroads brings you a variety of traditional Mexican and Tex-Mex Cuisine. Serving tacos, enchiladas, burritos, our signature hot plate fajitas and more. Crossroads currently has the longest bar in Lagos and offers an array of exotic alcoholic beverages.</p>
                    <p>It is an atmosphere for great music, the vibrant foodie and margarita lover. We bring you the perfect Nightlife atmosphere within the confines of the Hotel. Nightlife activities include:</p>
                    <p>
                    <ul>
                    <li><strong>Wednesdays:</strong>TexMex Night with Unlimited Tacos STARTS 7PM</li>
                    <li><strong>Thursdays:</strong>Snap It, Sip It, Post It Thursdays Starts 7pm</li>
                    <li><strong>Fridays:</strong>Tequi Buzz Friday with Unlimited Tequila (8pm – 11pm)</li>
                    </ul>
                    </p>
                    <p>
                     <strong> Open Hours:</strong>
                    <ul>
                    <li>Monday to Sunday FROM 6PM</li>
                    </ul>
                    </p>
                </section>
            </main>
        </div>
    )
}
export default CrossRoads;