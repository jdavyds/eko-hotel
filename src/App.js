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
    <BrowserRouter >
    <Header />
    <Switch>
      {/* HOME */}
    <Route exact path="/eko-hotel" component={Home} />
    <Route exact path='/contact-us' component={ContactPage}/>
    <Route exact path='/about-us' component={AboutPage}/>
    {/* HOTELS */}
    <Route exact path='/our-hotels' component={OurHotels}/>
    <Route exact path='/eko-gardens' component={EkoGarden}/>
    <Route exact path='/eko-hotels' component={EkoHotel}/>
    <Route exact path='/eko-suites' component={EkoSuites}/>
    <Route exact path='/eko-signature' component={EkoSignature}/>
    <Route exact path='/superior-room' component={GardenSuperior}/>
    <Route exact path='/classic-room' component={GardenClassic}/>
    <Route exact path='/classic-superior-room' component={ClassicSuperior}/>
    <Route exact path='/atlantic-superior-room' component={AtlanticSuperior}/>
    <Route exact path='/classic-suites' component={ClassicSuites}/>
    <Route exact path='/diplomatic-suites' component={DiplomaticSuites}/>
    <Route exact path='/presidential-suites' component={PresidentialSuites}/>
    <Route exact path='/deluxe-room' component={DeluxeRoom}/>
    <Route exact path='/studio-suites' component={StudioSuites}/>
    <Route exact path='/executive-suites' component={ExecutiveSuites}/>
    <Route exact path='/club-suites' component={ClubSuite}/>
    <Route exact path='/premium-suites' component={PremiumSuite}/>
    <Route exact path='/signature-suites' component={SignatureSuite}/>
    <Route exact path='/signature-presidential-suites' component={SigPresSuite}/>
    {/* DINING PAGE */}
    <Route exact path='/dining' component={DiningPage}/>
    <Route exact path='/sky-restaurant' component={SkyRestaurant}/>
    <Route exact path='/crossroads-restaurant' component={CrossRoads}/>
    <Route exact path='/lagos-irish-pub' component={LagosIrish}/>
    <Route exact path='/88-restaurant' component={Eighty8Restaurant}/>
    <Route exact path='/prime-restaurant' component={PrimeRestaurant}/>
    <Route exact path='/red-restaurant' component={RedRestaurant}/>
    <Route exact path='/kuramo-sports-cafe' component={KuramoSportsCafe}/>
    <Route exact path='/lagoon-breeze' component={LagoonBreeze}/>
    <Route exact path='/calabash-bar' component={CalabashBar}/>
    {/* MEETINGS & EVENTS */}
    <Route exact path='/meetings-and-events' component={MeetingsEvents}/>
    <Route exact path='/grand-ballroom' component={GrandBallRoom}/>
    <Route exact path='/eko-convention-center' component={ConventionCentre}/>
    <Route exact path='/fantasia' component={Fantasia}/>
    <Route exact path='/meeting-rooms' component={MeetingRooms}/>
    {/* RECREATION SERVICES */}
    <Route exact path='/recreational-services' component={RecreationPage}/>
    <Route exact path='/basketball-court' component={BballCourt}/>
    <Route exact path='/tennis-court' component={TennisCourt}/>
    <Route exact path='/volleyball-court' component={VballCourt}/>
    <Route exact path='/swimming-pool' component={SwimmingPool}/>
    <Route exact path='/gymnasium' component={Gymnasium}/>
    <Route exact path='/saloon-and-nail-studio' component={Saloon}/>
    <Route exact path='/spa' component={Spa}/>
    {/* Others */}
    <Route exact path='/gallery' component={GalleryPage}/>
    <Route exact path='/terms-and-conditions' component={Terms}/>
    </Switch>
    <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
