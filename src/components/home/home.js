import '../../App.css';
import Availability from './../all/availability/availability.js';
import About from './../all/about us/about.js';
import Hotels from './../all/hotels/hotels.js';
import Recreation from '../all/recreation/recreation.js';
import Dining from './../all/dining/dining.js';
import Gallery from './../all/gallery/gallery.js';
import Contact from './../all/contact us/contact.js';
import { BrowserRouter} from 'react-router-dom'
function Home() {
    return(
        <>
      <BrowserRouter >
      <Availability />
      <About />
      <Hotels />
      <Recreation />
      <Dining />
      <Gallery />
      <Contact />
      </BrowserRouter>
      </>
    )
}
export default Home;