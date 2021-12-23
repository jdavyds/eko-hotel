import './fantasia.css'
import { Link } from 'react-router-dom'
import fantasia from '../../../img/fantasia-main.jpg'
function Fantasia() {
    return(
        <div className="fantasia">
            <div className='cont'>
                <h1>FANTASIA</h1>
                <nav>
                    <Link to='/'>Home</Link> / fantasia
                </nav>
            </div>
            <p className='fantasia-p'>
                <div className='fantasia-hdr'>
                <h1 className='brown'>FANTASIA</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <section className="fantasia-gallery">
            <nav>
            <img src={fantasia} alt=""/>
            </nav>
            </section>
            <section className='fantasia-info'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem illum vitae facere doloremque quas voluptates dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem illum vitae facere doloremque quas voluptates dolore.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem illum vitae facere doloremque quas voluptates dolore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dolorem illum vitae facere doloremque quas voluptates dolore.</p>
            </section>
        </div>
    )
}
export default Fantasia;