import '../gallery_page/gallery_page.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import gal1 from '../../../img/ga-meeting-1.jpg'
import gal2 from '../../../img/grand-ballroom.jpg'
import gal3 from '../../../img/fantasia.jpg'
import gal4 from '../../../img/meeting-room.jpg'

function MeetEvents() {
    const images = [ gal1, gal2, gal3, gal4]
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
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
    function handleNextClick() {
        if(img !== 4) {
            setImg(img + 1)
        }
        if(img === 4 ) {
            setImg(1)
        }
    }
    function handlePrevClick() {
        if(img !== 1) {
            setImg(img - 1)
        }
        if(img === 1) {
            setImg(4)
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
        <img src={images[img - 1]} alt="" className='gal-modal-img'/>
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
        <img src={images[img - 1]} alt="" className='gal-modal-img'/>
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
        <img src={images[img - 1]} alt="" className='gal-modal-img'/>
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
        <img src={images[img - 1]} alt="" className='gal-modal-img'/>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        </>
    )
}
export default MeetEvents;