import './dining.css'
import { Link } from 'react-router-dom'
import sky from '../../img/sky-restaurant.jpg'
import eighty8 from '../../img/88-restaurant.jpg'
import lBreeze from '../../img/lagoon-breeze.jpg'
import calabash from '../../img/calabash-bar.jpg'
import lIrish from '../../img/lagos-irish-pub.jpg'
import redChinese from '../../img/red-chinese-restaurant.jpg'
import { ArrowForward } from '@material-ui/icons'
function Dining() {
    return(
        <div className='dining'>
            <p className='dng-p'>
                <div className='dng-hdr'>
                <h1 className='brown'>EKO</h1>
                <h1 className='blue'>DINING</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <div className='dng-main'>
                <nav className='diners'>
                    <img src={sky} alt="sky restaurant" />
                    <h3>THE SKY <br /> RESTAURANT</h3>
                    <p>Situated at the tallest Penthouse of Eko Hotel, the Sky Restaurant has a 'wow' factor that is hard to dispute. It's a...</p>
                    <Link to='/sky-restaurant'>Read More <ArrowForward /></Link>
                </nav>
                <nav className='diners'>
                    <img src={eighty8} alt="88 Restaurant"/>
                    <h3>88 RESTAURANT</h3>
                    <p>The 88 Restaurant is an infusion of afro-centric food culture. The menu is the brain-child of our British Nigerian c...</p>
                    <Link to='/88-restaurant'>Read More <ArrowForward /></Link>
                </nav>
                <nav className='diners'>
                    <img src={lBreeze} alt="lagoon breeze" />
                    <h3>LAGOON BREEZE</h3>
                    <p>Located by the swimming pool, the Lagoon Breeze Restaurant is loved by those who know Lagos and appreciate nicely pre...</p>
                    <Link to='/lagoon-breeze'>Read More <ArrowForward /></Link>
                </nav>
                <h1 className='inverted brown'>DINING</h1>
                <h1 className='inverted blue'>EKO</h1>
                <nav className='diners'>
                    <img src={calabash} alt="calabash bar" />
                    <h3>CALABASH BAR</h3>
                    <p>While watching a game on one of Kuramo Sports Café’s huge plasma screens, you can enjoy the best buffet in Lagos!</p>
                    <Link to='/calabash-bar'>Read More <ArrowForward /></Link>
                </nav>
                <nav className='diners'>
                    <img src={lIrish} alt="lagos irish pub" />
                    <h3>LAGOS IRISH PUB</h3>
                    <p>Lagos Irish Pub is a charming wooden traditional pub with live music and an outdoor patio. Enjoy a pint and a large s...</p>
                    <Link to='/lagos-irish-pub'>Read More <ArrowForward /></Link>
                </nav>
                <nav className='diners'>
                    <img src={redChinese} alt="red chinese restaurant" />
                    <h3>RED CHINESE RESTAURANT</h3>
                    <p>RED Chinese Restaurant & Lounge offers a unique dining experience in the day time and becomes the perfect night Loung...</p>
                    <Link to='/red-restaurant'>Read More <ArrowForward /></Link>
                </nav>
            </div>
        </div>
    )
}
export default Dining;