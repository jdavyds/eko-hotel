import '../gallery_page/gallery_page.css'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import gal1 from '../../../img/gallery_img3.jpg'
import gal2 from '../../../img/ga-restaurant-2.jpg'
import gal3 from '../../../img/ga-restaurant-3.jpg'
import gal4 from '../../../img/ga-restaurant-4.jpg' 
import gal5 from '../../../img/gallery_img6.jpg'
import gal6 from '../../../img/ga-restaurant-6.jpg' 
import gal7 from '../../../img/ga-restaurant-7.jpg'
import gal8 from '../../../img/ga-restaurant-8.jpg'
import gal9 from '../../../img/ga-restaurant-10.jpg'
import gal10 from '../../../img/ga-restaurant-11.jpg'
import gal11 from '../../../img/ga-restaurant-12.jpg'
import gal12 from '../../../img/ga-restaurant-13.jpg'
import gal13 from '../../../img/ga-restaurant-14.jpg'
import gal14 from '../../../img/ga-restaurant-9.jpg'
import gal15 from '../../../img/ga-restaurant-15.jpg'
import gal16 from '../../../img/sky-restaurant-img-1.jpg'
import gal17 from '../../../img/ga-restaurant-17.jpg'
import gal18 from '../../../img/ga-restaurant-18.jpg'
import gal19 from '../../../img/ga-restaurant-19.jpg'
import gal20 from '../../../img/ga-restaurant-20.jpg'
import gal21 from '../../../img/ga-restaurant-21.jpg'
import gal22 from '../../../img/ga-restaurant-22.jpg'
import gal23 from '../../../img/ga-restaurant-23.jpg'
import gal24 from '../../../img/ga-restaurant-24.jpg'
import gal25 from '../../../img/ga-restaurant-25.jpg'
import gal26 from '../../../img/ga-restaurant-26.jpg'

function GalDin() {
    const images = [ gal1, gal2, gal3, gal4, gal5, gal6, gal7, gal8, gal9, gal10, gal11, gal12, gal13, gal14, gal15, gal16, gal17, gal18, gal19, gal20, gal21, gal22, gal23, gal24, gal25, gal26 ]
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
    const [open12, setOpen12] = useState(false);
    const [open13, setOpen13] = useState(false);
    const [open14, setOpen14] = useState(false);
    const [open15, setOpen15] = useState(false);
    const [open16, setOpen16] = useState(false);
    const [open17, setOpen17] = useState(false);
    const [open18, setOpen18] = useState(false);
    const [open19, setOpen19] = useState(false);
    const [open20, setOpen20] = useState(false);
    const [open21, setOpen21] = useState(false);
    const [open22, setOpen22] = useState(false);
    const [open23, setOpen23] = useState(false);
    const [open24, setOpen24] = useState(false);
    const [open25, setOpen25] = useState(false);
    const [open26, setOpen26] = useState(false);
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
    const handleOpen12 = () => {
        setOpen12(true);
        setImg(12)
    }
    const handleOpen13 = () => {
        setOpen13(true);
        setImg(13)
    }
    const handleOpen14 = () => {
        setOpen14(true);
        setImg(14)
    }
    const handleOpen15 = () => {
        setOpen15(true);
        setImg(15)
    }
    const handleOpen16 = () => {
        setOpen16(true);
        setImg(16)
    }
    const handleOpen17 = () => {
        setOpen17(true);
        setImg(17)
    }
    const handleOpen18 = () => {
        setOpen18(true);
        setImg(18)
    }
    const handleOpen19 = () => {
        setOpen19(true);
        setImg(19)
    }
    const handleOpen20 = () => {
        setOpen20(true);
        setImg(20)
    }
    const handleOpen21 = () => {
        setOpen21(true);
        setImg(21)
    }
    const handleOpen22 = () => {
        setOpen22(true);
        setImg(22)
    }
    const handleOpen23 = () => {
        setOpen23(true);
        setImg(23)
    }
    const handleOpen24 = () => {
        setOpen24(true);
        setImg(24)
    }
    const handleOpen25 = () => {
        setOpen25(true);
        setImg(25)
    }
    const handleOpen26 = () => {
        setOpen26(true);
        setImg(26)
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
    const handleClose12 = () => {
        setOpen12(false)
        setImg(0)
    };
    const handleClose13 = () => {
        setOpen13(false)
        setImg(0)
    };
    const handleClose14 = () => {
        setOpen14(false)
        setImg(0)
    };
    const handleClose15 = () => {
        setOpen15(false)
        setImg(0)
    };
    const handleClose16 = () => {
        setOpen16(false)
        setImg(0)
    };
    const handleClose17 = () => {
        setOpen17(false)
        setImg(0)
    };
    const handleClose18 = () => {
        setOpen18(false)
        setImg(0)
    };
    const handleClose19 = () => {
        setOpen19(false)
        setImg(0)
    };
    const handleClose20 = () => {
        setOpen20(false)
        setImg(0)
    };
    const handleClose21 = () => {
        setOpen21(false)
        setImg(0)
    };
    const handleClose22 = () => {
        setOpen22(false)
        setImg(0)
    };
    const handleClose23 = () => {
        setOpen23(false)
        setImg(0)
    };
    const handleClose24 = () => {
        setOpen24(false)
        setImg(0)
    };
    const handleClose25 = () => {
        setOpen25(false)
        setImg(0)
    };
    const handleClose26 = () => {
        setOpen26(false)
        setImg(0)
    };
    function handleNextClick() {
        if(img !== 26) {
            setImg(img + 1)
        }
        if(img === 26) {
            setImg(1)
        }
    }
    function handlePrevClick() {
        if(img !== 1) {
            setImg(img - 1)
        }
        if(img === 1) {
            setImg(26)
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
                <div className="nav-images" onClick={handleOpen12}>
                    <img src={gal12} alt="" className='nav-img' />
                </div>
                <Modal
                open={open12}
                onClose={handleClose12}
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
                <div className="nav-images" onClick={handleOpen13}>
                    <img src={gal13} alt="" className='nav-img' />
                </div>
                <Modal
                open={open13}
                onClose={handleClose13}
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
                <div className="nav-images" onClick={handleOpen14}>
                    <img src={gal14} alt="" className='nav-img' />
                </div>
                <Modal
                open={open14}
                onClose={handleClose14}
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
                <div className="nav-images" onClick={handleOpen15}>
                    <img src={gal15} alt="" className='nav-img' />
                </div>
                <Modal
                open={open15}
                onClose={handleClose15}
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
                <div className="nav-images" onClick={handleOpen16}>
                    <img src={gal16} alt="" className='nav-img' />
                </div>
                <Modal
                open={open16}
                onClose={handleClose16}
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
                <div className="nav-images" onClick={handleOpen17}>
                    <img src={gal17} alt="" className='nav-img' />
                </div>
                <Modal
                open={open17}
                onClose={handleClose17}
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
                <div className="nav-images" onClick={handleOpen18}>
                    <img src={gal18} alt="" className='nav-img' />
                </div>
                <Modal
                open={open18}
                onClose={handleClose18}
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
                <div className="nav-images" onClick={handleOpen19}>
                    <img src={gal19} alt="" className='nav-img' />
                </div>
                <Modal
                open={open19}
                onClose={handleClose19}
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
                <div className="nav-images" onClick={handleOpen20}>
                    <img src={gal20} alt="" className='nav-img' />
                </div>
                <Modal
                open={open20}
                onClose={handleClose20}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                {/* <img src={images[img - 1]} alt="" className='gal-modal-img'/> */}
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                <div className="nav-images" onClick={handleOpen21}>
                    <img src={gal21} alt="" className='nav-img' />
                </div>
                <Modal
                open={open21}
                onClose={handleClose21}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video' id='iframe'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                <div className="nav-images" onClick={handleOpen22}>
                    <img src={gal22} alt="" className='nav-img' />
                </div>
                <Modal
                open={open22}
                onClose={handleClose22}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video' id='iframe'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                <div className="nav-images" onClick={handleOpen23}>
                    <img src={gal23} alt="" className='nav-img' />
                </div>
                <Modal
                open={open23}
                onClose={handleClose23}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video' id='iframe'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                <div className="nav-images" onClick={handleOpen24}>
                    <img src={gal24} alt="" className='nav-img' />
                </div>
                <Modal
                open={open24}
                onClose={handleClose24}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video' id='iframe'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                <div className="nav-images" onClick={handleOpen25}>
                    <img src={gal25} alt="" className='nav-img' />
                </div>
                <Modal
                open={open25}
                onClose={handleClose25}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video' id='iframe'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                <div className="nav-images" onClick={handleOpen26}>
                    <img src={gal26} alt="" className='nav-img' />
                </div>
                <Modal
                open={open26}
                onClose={handleClose26}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='gallery-modal'
                >
                <nav>
                <FontAwesomeIcon icon={faCaretLeft} id='gal-modal-nav-prev' onClick={handlePrevClick} />
                <iframe class="mfp-iframe" src={images[img - 1]} frameborder="0" allowfullscreen="" className='gal-modal-img' title='video' id='iframe'></iframe>
                <FontAwesomeIcon icon={faCaretRight} id='gal-modal-nav-next' onClick={handleNextClick} />
                </nav>
                </Modal>
                </>
            )
}
export default GalDin;