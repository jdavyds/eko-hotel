import '../gallery_page/gallery_page.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import gal1 from '../../../img/ga-video-1.jpg'
import gal2 from '../../../img/ga-video-2.jpg'
import gal3 from '../../../img/ga-video-3.jpg'
import gal4 from '../../../img/ga-video-4.jpg'
import gal5 from '../../../img/ga-video-5.jpg'
import gal6 from '../../../img/ga-video-6.jpg'

function Videos() {
    const vid1 = 'https://www.youtube.com/embed/bVPsmj3HsJc?autoplay=1'
    const vid2 = 'https://www.youtube.com/embed/jn2_b_A7cDY?autoplay=1'
    const vid3 = 'https://www.youtube.com/embed/xV-vasTlJLE?autoplay=1'
    const vid4 = 'https://www.youtube.com/embed/d4W59EBPVX4?autoplay=1'
    const vid5 = 'https://www.youtube.com/embed/L4s67U9iwvM?autoplay=1'
    const vid6 = 'https://www.youtube.com/embed/lejszLpSUJY?autoplay=1'

    const images = [ vid1, vid2, vid3, vid4, vid5, vid6 ]
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [ img, setImg ] = useState(1)
    
    const handleOpen1 = () => {
        setOpen1(true);
        setImg(1)
    }
    const handleOpen2 = () => {
        setOpen2(true);
        setImg(2)
    }
    const handleOpen3 = () => {
        setOpen3(true);
        setImg(3)
    }
    const handleOpen4 = () => {
        setOpen4(true);
        setImg(4)
    }
    const handleOpen5 = () => {
        setOpen5(true);
        setImg(5)
    }
    const handleOpen6 = () => {
        setOpen6(true);
        setImg(6)
    }
    const handleClose1 = () => {
        setOpen1(false)
        setImg(0)
    };
    const handleClose2 = () => {
        setOpen2(false)
        setImg(0)
    };
    const handleClose3 = () => {
        setOpen3(false)
        setImg(0)
        console.log(img);
    };
    const handleClose4 = () => {
        setOpen4(false)
        setImg(0)
    };
    const handleClose5 = () => {
        setOpen5(false)
        setImg(0)
    };
    const handleClose6 = () => {
        setOpen6(false)
        setImg(0)
    };
    function handleNextClick() {
        if(img !== 6) {
            setImg(img + 1)
        }
        if(img === 6 ) {
            setImg(1)
        }
    }
    function handlePrevClick() {
        if(img !== 1) {
            setImg(img - 1)
        }
        if(img === 1) {
            setImg(6)
        }
    }
    return(
        <>
        <div className="nav-images" onClick={handleOpen1}>
            <img src={gal1} alt="" className='nav-img' />
        </div>
        <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='gallery-modal'
        >
        <nav>
        <FontAwesomeIcon icon={faCaretLeft} 
        id='gal-modal-nav-prev' onClick={handlePrevClick} />
        <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick}/>
        </nav>
        </Modal>
        <div className="nav-images" onClick={handleOpen2}>
            <img src={gal2} alt="" className='nav-img' />
        </div>
        <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='gallery-modal'
        >
        <nav>
        <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
        <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        <div className="nav-images" onClick={handleOpen3}>
            <img src={gal3} alt="" className='nav-img' />
        </div>
        <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='gallery-modal'
        >
        <nav>
        <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
        <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        <div className="nav-images" onClick={handleOpen4}>
            <img src={gal4} alt="" className='nav-img' />
        </div>
        <Modal
        open={open4}
        onClose={handleClose4}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='gallery-modal'
        >
        <nav>
        <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
        <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        <div className="nav-images" onClick={handleOpen5}>
            <img src={gal5} alt="" className='nav-img' />
        </div>
        <Modal
        open={open5}
        onClose={handleClose5}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='gallery-modal'
        >
        <nav>
        <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
        <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        <div className="nav-images" onClick={handleOpen6}>
            <img src={gal6} alt="" className='nav-img' />
        </div>
        <Modal
        open={open6}
        onClose={handleClose6}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='gallery-modal'
        >
        <nav>
        <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
        <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        </>
    )
}
export default Videos;