import './footer.css'
import { Link } from 'react-router-dom'
import logoFooter from '../../img/logo-footer.png'
import { Facebook, Instagram, Mail, Map, Phone, Pinterest, Telegram, Twitter } from '@material-ui/icons'
function Footer() {
    return(
    <footer>
        <div className='footer'>
        <div className="left">
            <Link to='/about-us'>ABOUT</Link>
            <Link to='/gallery'>GALLERY</Link>
            <Link to='/#'>OUR EVENTS</Link>
            <Link to='/our-hotels'>OUR HOTELS</Link>
            <Link to='/dining'>DINING</Link>
            <Link to='/about-us'>OUR VISION & MISSION</Link>
            <Link to='/contact-us'>CONTACT US</Link>
            <Link to='/terms-and-conditions'>TERMS & CONDITIONS</Link>
        </div>
        <div className="centre">
            <img src={logoFooter} alt="" />
            <p>
                <Map className='icon' />Plot 1415 Adetokunbo Ademola Street, PMB 12724, Victoria Island, Lagos Nigeria
            </p>
            <p>
                <Phone className='icon'/>+234 1 2772700-25 , +234 1 460610 (ext.6125, 6203, 6079, 6297, 6215, 6124)
            </p>
            <p>
                <Phone className='icon' />Fax: +234 1 2704071
            </p>
            <p>
                <Mail className='icon' />sales@ekohotels.com, reservation@ekohotels.com, banquet@ekohotels.com
            </p>
        </div>
        <div className="right">
            <h6>NEWSLETTER</h6>
            <p>Subscribe to our email newsletter to receive updates and news.</p>
            <form>
            <input type="email" name="mail"  placeholder='Email address'/> <Telegram className='input-btn'/>
            </form>
            <p className='icons'>
                <Facebook /> <Instagram /> <Twitter /> <Pinterest />
            </p>
        </div>
        </div>
        <div className='copyright'>
        Copyright © 2021 JDAVYDZ
        </div>
    </footer>
    )
}
export default Footer;