import '../gallery_page/gallery_page.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import gal1 from '../../../img/view.jpg'
import gal2 from '../../../img/ga-hotel-2.jpg'
import gal3 from '../../../img/ga-hotel-3.jpg'
import gal4 from '../../../img/home-about.jpg'
import gal5 from '../../../img/ga-hotel-5.jpg'
import gal6 from '../../../img/ga-hotel-6.jpg'
import gal7 from '../../../img/ga-hotel-7.jpg'
import gal8 from '../../../img/ga-hotel-8.jpg'
import gal9 from '../../../img/ga-hotel-9.jpg'
import gal10 from '../../../img/ga-hotel-10.jpg'
import gal11 from '../../../img/ga-hotel-11.jpg'
function Accom() {
    const images = [ gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11 ]
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
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
    const handleOpen7 = () => {
        setOpen7(true);
        setImg(7)
    }
    const handleOpen8 = () => {
        setOpen8(true);
        setImg(8)
    }
    const handleOpen9 = () => {
        setOpen9(true);
        setImg(9)
    }
    const handleOpen10 = () => {
        setOpen10(true);
        setImg(10)
    }
    const handleOpen11 = () => {
        setOpen11(true);
        setImg(11)
    }
    const handleClose1 = () => {
        setOpen1(false)
        setImg(0)
        console.log(img);
    };
    const handleClose2 = () => {
        setOpen2(false)
        setImg(0)
        console.log(img);
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
    const handleClose7 = () => {
        setOpen7(false)
        setImg(0)
    };
    const handleClose8 = () => {
        setOpen8(false)
        setImg(0)
    };
    const handleClose9 = () => {
        setOpen9(false)
        setImg(0)
    };
    const handleClose10 = () => {
        setOpen10(false)
        setImg(0)
    };
    const handleClose11 = () => {
        setOpen11(false)
        setImg(0)
    };
    function handleNextClick() {
        if(img !== 11) {
            setImg(img + 1)
        }
        if(img === 11 ) {
            setImg(1)
        }
    }
    function handlePrevClick() {
        if(img !== 1) {
            setImg(img - 1)
        }
        if(img === 1) {
            setImg(11)
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
        <img src={images[img - 1]} alt="" className='gal-modal-img'/>
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
        <img src={images[img - 1]} alt="" className='gal-modal-img'/>
        <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
        </nav>
        </Modal>
        <div className="nav-images" onClick={handleOpen7}>
            <img src={gal7} alt="" className='nav-img' />
        </div>
        <Modal
        open={open7}
        onClose={handleClose7}
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
        <div className="nav-images" onClick={handleOpen8}>
            <img src={gal8} alt="" className='nav-img' />
        </div>
        <Modal
        open={open8}
        onClose={handleClose8}
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
        <div className="nav-images" onClick={handleOpen9}>
            <img src={gal9} alt="" className='nav-img' />
        </div>
        <Modal
        open={open9}
        onClose={handleClose9}
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
        <div className="nav-images" onClick={handleOpen10}>
            <img src={gal10} alt="" className='nav-img' />
        </div>
        <Modal
        open={open10}
        onClose={handleClose10}
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
        <div className="nav-images" onClick={handleOpen11}>
            <img src={gal11} alt="" className='nav-img' />
        </div>
        <Modal
        open={open11}
        onClose={handleClose11}
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
export default Accom;