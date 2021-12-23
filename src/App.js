import './App.css';
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Footer from './components/all/footer/footer';
import Header from './components/all/header/header';
import Home from './components/home/home';
import EkoGarden from './components/all/Eko Gardens/eko_garden/eko_gargen';
import EkoHotel from './components/all/Eko Hotels/eko_hotels/eko_hotels';
import EkoSuites from './components/all/Eko Suites/eko_suites/eko_suites';
import EkoSignature from './components/all/Eko Signature/eko_signature/eko_signature';
import GardenSuperior from './components/all/Eko Gardens/eko_garden_superior/eko_garden_superior';
import GardenClassic from './components/all/Eko Gardens/eko_garden_classic/eko_garden_classic';
import AtlanticSuperior from './components/all/Eko Hotels/eko_hotels_atlantic_superior/atlantic_superior';
import ClassicSuites from './components/all/Eko Hotels/eko_hotels_classic_suites/classic_suites';
import ClassicSuperior from './components/all/Eko Hotels/eko_hotels_classic_superior/classic_superior';
import PresidentialSuites from './components/all/Eko Hotels/eko_hotels_presidential_suite/presidential_suites';
import DiplomaticSuites from './components/all/Eko Hotels/eko_hotels_diplomatic_suites/diplomatic_suites';
import DeluxeRoom from './components/all/Eko Suites/deluxe_room/deluxe_room';
import ExecutiveSuites from './components/all/Eko Suites/executive_suite/executive_suite';
import StudioSuites from './components/all/Eko Suites/studio_suite/studio_suites';
import ClubSuite from './components/all/Eko Signature/club_suite/club_suite';
import PremiumSuite from './components/all/Eko Signature/premium_suite/premium_suite';
import SigPresSuite from './components/all/Eko Signature/presidential_suite/sig_presidential_suite';
import SignatureSuite from './components/all/Eko Signature/signature_suite/signature_suite';
import AboutPage from './components/all/about us/about_page';
import ContactPage from './components/all/contact us/contact_page';
import DiningPage from './components/all/Dining Page/dining_page/dining_page';
import SkyRestaurant from './components/all/Dining Page/sky_restaurant/sky_restaurant';
import CrossRoads from './components/all/Dining Page/crossroads_restaurant/crossroads_res';
import LagosIrish from './components/all/Dining Page/lagos_irish_pub/lagos_irish';
import Eighty8Restaurant from './components/all/Dining Page/88_restaurant/88_restaurant';
import PrimeRestaurant from './components/all/Dining Page/prime_restaurant/prime_restaurant';
import RedRestaurant from './components/all/Dining Page/red_restaurant/red_restaurant';
import KuramoSportsCafe from './components/all/Dining Page/kuramo_sports_cafe/kuramo_sports';
import LagoonBreeze from './components/all/Dining Page/lagoon_breeze_restaurant/lagoon_breeze';
import CalabashBar from './components/all/Dining Page/calabash_bar/calabash_bar';
import MeetingsEvents from './components/all/Meetings & Events/meetings & events page/meetings_&_events';
import GrandBallRoom from './components/all/Meetings & Events/grand_ball_room/grand_ball_room';
import ConventionCentre from './components/all/Meetings & Events/eko_convention_centre/convention_centre';
import Fantasia from './components/all/Meetings & Events/fantasia/fantasia';
import MeetingRooms from './components/all/Meetings & Events/meeting_rooms/meeting_rooms';
import RecreationPage from './components/all/Recreation Page/recreation_page/recreation_page';
import BballCourt from './components/all/Recreation Page/bball_court/bball_court';
import TennisCourt from './components/all/Recreation Page/tennis_court/tennis_court';
import VballCourt from './components/all/Recreation Page/vball_court/vball_court';
import SwimmingPool from './components/all/Recreation Page/swimming_pool/swimming_pool';
import Gymnasium from './components/all/Recreation Page/gymnasium/gymnasium';
import Saloon from './components/all/Recreation Page/saloon/saloon';
import Spa from './components/all/Recreation Page/spa/spa';
import GalleryPage from './components/all/Gallery_page/gallery_page/gallery_page';
import OurHotels from './components/all/Our Hotels/our_hotels';
import Terms from './components/all/terms & cond/terms';
function App() {
  return (
    <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Header />
    <Switch>
      {/* HOME */}
    <Route exact path="/eko-hotel" component={Home} />
    <Route exact path='/eko-hotel/contact-us' component={ContactPage}/>
    <Route exact path='/eko-hotel/about-us' component={AboutPage}/>
    {/* HOTELS */}
    <Route exact path='/eko-hotel/our-hotels' component={OurHotels}/>
    <Route exact path='/eko-hotel/eko-gardens' component={EkoGarden}/>
    <Route exact path='/eko-hotel/eko-hotels' component={EkoHotel}/>
    <Route exact path='/eko-hotel/eko-suites' component={EkoSuites}/>
    <Route exact path='/eko-hotel/eko-signature' component={EkoSignature}/>
    <Route exact path='/eko-hotel/superior-room' component={GardenSuperior}/>
    <Route exact path='/eko-hotel/classic-room' component={GardenClassic}/>
    <Route exact path='/eko-hotel/classic-superior-room' component={ClassicSuperior}/>
    <Route exact path='/eko-hotel/atlantic-superior-room' component={AtlanticSuperior}/>
    <Route exact path='/eko-hotel/classic-suites' component={ClassicSuites}/>
    <Route exact path='/eko-hotel/diplomatic-suites' component={DiplomaticSuites}/>
    <Route exact path='/eko-hotel/presidential-suites' component={PresidentialSuites}/>
    <Route exact path='/eko-hotel/deluxe-room' component={DeluxeRoom}/>
    <Route exact path='/eko-hotel/studio-suites' component={StudioSuites}/>
    <Route exact path='/eko-hotel/executive-suites' component={ExecutiveSuites}/>
    <Route exact path='/eko-hotel/club-suites' component={ClubSuite}/>
    <Route exact path='/eko-hotel/premium-suites' component={PremiumSuite}/>
    <Route exact path='/eko-hotel/signature-suites' component={SignatureSuite}/>
    <Route exact path='/eko-hotel/signature-presidential-suites' component={SigPresSuite}/>
    {/* DINING PAGE */}
    <Route exact path='/eko-hotel/dining' component={DiningPage}/>
    <Route exact path='/eko-hotel/sky-restaurant' component={SkyRestaurant}/>
    <Route exact path='/eko-hotel/crossroads-restaurant' component={CrossRoads}/>
    <Route exact path='/eko-hotel/lagos-irish-pub' component={LagosIrish}/>
    <Route exact path='/eko-hotel/88-restaurant' component={Eighty8Restaurant}/>
    <Route exact path='/eko-hotel/prime-restaurant' component={PrimeRestaurant}/>
    <Route exact path='/eko-hotel/red-restaurant' component={RedRestaurant}/>
    <Route exact path='/eko-hotel/kuramo-sports-cafe' component={KuramoSportsCafe}/>
    <Route exact path='/eko-hotel/lagoon-breeze' component={LagoonBreeze}/>
    <Route exact path='/eko-hotel/calabash-bar' component={CalabashBar}/>
    {/* MEETINGS & EVENTS */}
    <Route exact path='/eko-hotel/meetings-and-events' component={MeetingsEvents}/>
    <Route exact path='/eko-hotel/grand-ballroom' component={GrandBallRoom}/>
    <Route exact path='/eko-hotel/eko-convention-center' component={ConventionCentre}/>
    <Route exact path='/eko-hotel/fantasia' component={Fantasia}/>
    <Route exact path='/eko-hotel/meeting-rooms' component={MeetingRooms}/>
    {/* RECREATION SERVICES */}
    <Route exact path='/eko-hotel/recreational-services' component={RecreationPage}/>
    <Route exact path='/eko-hotel/basketball-court' component={BballCourt}/>
    <Route exact path='/eko-hotel/tennis-court' component={TennisCourt}/>
    <Route exact path='/eko-hotel/volleyball-court' component={VballCourt}/>
    <Route exact path='/eko-hotel/swimming-pool' component={SwimmingPool}/>
    <Route exact path='/eko-hotel/gymnasium' component={Gymnasium}/>
    <Route exact path='/eko-hotel/saloon-and-nail-studio' component={Saloon}/>
    <Route exact path='/eko-hotel/spa' component={Spa}/>
    {/* Others */}
    <Route exact path='/eko-hotel/gallery' component={GalleryPage}/>
    <Route exact path='/eko-hotel/terms-and-conditions' component={Terms}/>
    </Switch>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
