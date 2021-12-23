import './terms.css'
import { Link } from 'react-router-dom'
function Terms() {
    return(
        <div className="terms">
            <div className='cont'>
                <h1>Terms & Conditions</h1>
                <nav>
                    <Link to='/'>Home</Link> / Terms & Conditions
                </nav>
            </div>
            <main>
            <p className='terms-p'>
                <div className='terms-hdr'>
                <h1 className='brown'>TERMS & CONDITIONS</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <ul>
            The use of this website is subject to the following terms of use:
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
            <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by us for use by third parties.</li>
            <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
            <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
            <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
            <li>Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
            <li>From time to time this website may also include links to other websites. These links are provided for your convenience to provide further information.</li>
            </ul>
            </main>
        </div>
    )
}
export default Terms;