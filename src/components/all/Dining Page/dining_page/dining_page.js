import './dining_page.css'
import { Link } from 'react-router-dom'
import skyRes from '../../../img/sky-restaurant-img-2.jpg'
import crossRoad from '../../../img/crossroads-restaurant-1.jpg'
import lagIrish from '../../../img/lagos-irish-pub-0.jpg'
import eithy8Res from '../../../img/88-restaurant-3.jpg'
import primeRes from '../../../img/prime-steakhouse-1.jpg'
import redRes from '../../../img/red-chinese-restaurant-1.jpg'
import kuramoSportsCafe from '../../../img/kuramo-sports-cafe-4.jpg'
import lagoonBreeze from '../../../img/lagoon-breeze-1.jpg'
import calabashBar from '../../../img/calabash-bar-1.jpg'

function DiningPage() {
    return(
        <div className='dining-page'>
            <div className='cont'>
                <h1>EKO DINING</h1>
                <nav>
                    <Link to='/'>Home</Link> / Dining
                </nav>
            </div>
            <main>
            <section>
                <div className='res-img'>
                    <img src={skyRes} alt="" />
                </div>
                <div className='res-info right'>
                    <p>
                        <h3>SKY RESTAURANT</h3>
                        Situated at the tallest Penthouse of Eko Hotel, the Sky Restaurant has a 'wow' factor that is hard to dispute. It's about the highest restaurant in the city of Lagos..
                    </p>
                    <button>
                        <Link to='/sky-restaurant'>
                        VIEW DETAILS
                        </Link>
                    </button>
                </div>
            </section>
            <section>
                <div className='res-info left'>
                    <p>
                        <h3>CROSSROADS RESTAURANT</h3>
                        Nigeria’s leading Tex-Mex Restaurant and Bar in the heart of the city! Crossroads brings you a variety of traditional Mexican and Tex-Mex Cuisine. Serving tacos, enchiladas, burritos..
                    </p>
                    <button>
                    <Link to='/crossroads-restaurant'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
                <div className='res-img'>
                    <img src={crossRoad} alt="" />
                </div>
            </section>
            <section>
                <div className='res-img'>
                    <img src={lagIrish} alt="" />
                </div>
                <div className='res-info right'>
                    <p>
                        <h3>LAGOS IRISH PUB</h3>
                        Lagos Irish Pub is a charming wooden traditional pub with live music and an outdoor patio. Enjoy a pint and a large selection of original Irish whiskies and pub grub..</p>
                    <button>
                    <Link to='/lagos-irish-pub'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
            </section>
            <section>
                <div className='res-info left'>
                    <p>
                        <h3>88 RESTAURANT</h3>
                        The 88 Restaurant is an infusion of afro-centric food culture. The menu is the brain-child of our British Nigerian chef using his Mama’s recipes and is derived from local Nigerian dishes..</p>
                    <button>
                    <Link to='/88-restaurant'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
                <div className='res-img'>
                    <img src={eithy8Res} alt="" />
                </div>
            </section>
            <section>
                <div className='res-img'>
                    <img src={primeRes} alt="" />
                </div>
                <div className='res-info right'>
                    <p>
                        <h3>PRIME RESTAURANT</h3>
                        Prime Restaurant is a steak and seafood experiential dining, that takes you on a journey of culinary excellence. The Bar and Lounge is designed for the discerning connoisseur of fine wines and spirits..</p>
                    <button>
                    <Link to='/prime-restaurant'>
                        VIEW DETAILS
                    </Link>
                    </button>  
                </div>
            </section>
            <section>
                <div className='res-info left'>
                    <p>
                        <h3>RED RESTAURANT</h3>
                        RED Chinese Restaurant & Lounge offers a unique dining experience in the day time and becomes the perfect night Lounge until the morning..</p>
                    <button>
                    <Link to='/red-restaurant'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
                <div className='res-img'>
                    <img src={redRes} alt="" />
                </div>
            </section>
            <section>
                <div className='res-img'>
                    <img src={kuramoSportsCafe} alt="" />
                </div>
                <div className='res-info right'>
                    <p>
                        <h3>KURAMO SPORTS CAFÉ</h3>
                        While watching a game on one of Kuramo Sports Café’s huge plasma screens, you can enjoy the best buffet in Lagos! Feast your eyes on a cornucopia..</p>
                    <button>
                    <Link to='/kuramo-sports-cafe'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
            </section>
            <section>
                <div className='res-info left'>
                    <p>
                        <h3>LAGOON BREEZE RESTAURANT</h3>
                        Located by the swimming pool, the Lagoon Breeze Restaurant is loved by those who know Lagos and appreciate nicely prepared grills.Come and enjoy the soothing breeze of the Atlantic Ocean..</p>
                    <button>
                    <Link to='/lagoon-breeze'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
                <div className='res-img'>
                    <img src={lagoonBreeze} alt="" />
                </div>
            </section>
            <section>
                <div className='res-img'>
                    <img src={calabashBar} alt="" />
                </div>
                <div className='res-info right'>
                    <p>
                        <h3>CALABASH BAR</h3>
                        The Calabash bar is the ideal bar to wind down and relax after an activity-filled day. A place to meet interesting people, enjoy a drink with colleagues and be entertained by our resident band..</p>
                    <button>
                    <Link to='/calabash-bar'>
                        VIEW DETAILS
                    </Link>
                    </button>
                </div>
            </section>
            </main>
        </div>
    )
}
export default DiningPage;