import './gallery.css'
import { useState } from 'react'
import img1 from '../../img/gallery_img1.jpg'
import img2 from '../../img/gallery_img2.jpg'
import img3 from '../../img/gallery_img3.jpg'
import img4 from '../../img/gallery_img4.jpg'
import img5 from '../../img/gallery_img5.jpg'
import img6 from '../../img/gallery_img6.jpg'
import img7 from '../../img/gallery_img7.jpg'
import img8 from '../../img/gallery_img8.jpg'
import img9 from '../../img/gallery_img9.jpg'
import img10 from '../../img/gallery_img10.jpg'
import img11 from '../../img/gallery_img11.jpg'
import img12 from '../../img/gallery_img12.jpg'
import { FiberManualRecord, NavigateNext, NavigateBefore } from '@material-ui/icons'
import Modal from '@mui/material/Modal';
function Gallery() {
    const [ one, setOne ] = useState('glr-dot active')
    const [ two, setTwo ] = useState('glr-dot')
    const [ three, setThree ] = useState('glr-dot')
    const [ prev, setPrev ] = useState('inactive')
    const [ next, setNext ] = useState('')
    const [ glr, setGlr] = useState(0)
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
    const [ modalNext, setModalNext ] = useState('next')
    const [ modalPrev, setModalPrev ] = useState('prev')
    const [ img, setImg ] = useState(1)
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]
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
    let styleGlr = {
        transform: 'translateX('+ glr +'% )'
    }
    function handlePrev() {
        if(glr < -100) {
            setGlr(
                glr=> glr + 103.5
                )
            setPrev('')
            setNext('')
        } else {
            setPrev('inactive')
        }
        if(glr > -116) {
            setOne('glr-dot active')
            setTwo('glr-dot')
            setThree('glr-dot')
        }else if(glr > -532 & glr < -116) {
            setOne('glr-dot')
            setTwo('glr-dot active')
            setThree('glr-dot')
        }  else if(glr > -832) {
            setOne('glr-dot')
            setTwo('glr-dot')
            setThree('glr-dot active')
        }
    }
    function handleNext() {
        if(glr > -730) {
            setGlr(
                glr => glr - 103.5
                )
                setPrev('')
                setNext('')
        } else {
                setNext('inactive')
        }
        if(glr > -310) {
            setOne('glr-dot active')
            setTwo('glr-dot')
            setThree('glr-dot')
        }else if(glr < -310 & glr > -724) {
            setOne('glr-dot')
            setTwo('glr-dot active')
            setThree('glr-dot')
        }  else if(glr < -724) {
            setOne('glr-dot')
            setTwo('glr-dot')
            setThree('glr-dot active')
        }
    }
    function dotOne(e) {
        setGlr(
            glr => 0
        )
        setTwo('glr-dot')
        setThree('glr-dot')
        setOne('glr-dot active')
        setPrev('inactive')
        setNext('')
    }
    function dotTwo() {
        setGlr(
            glr => -415
        )
        setOne('glr-dot')
        setThree('glr-dot')
        setTwo('glr-dot active')
        setPrev('')
        setNext('')
    }
    function dotThree() {
        setGlr(
            glr => -832
        )
        setOne('glr-dot')
        setTwo('glr-dot')
        setThree('glr-dot active')
        setPrev('')
        setNext('inactive')
    }
    function handlePrevEnter() {
        setModalPrev('prev active')
    }
    function handlePrevLeave() {
        setModalPrev('prev')
    }
    function handleNextEnter() {
        setModalNext('next active')
    }
    function handleNextLeave() {
        setModalNext('next')
    }
    function handleNextClick() {
        if(img !== 12) {
            setImg(img + 1)
        }
    }
    function handlePrevClick() {
        if(img !== 1) {
            setImg(img - 1)
        }
    }
    return(
        <div className='gallery'>
            <p className='glr-p'>
                <div className='glr-hdr'>
                <h1 className='brown'>OUR</h1>
                <h1 className='blue'>GALLERY</h1>
                </div>
                <span></span>
                <span></span>
                <span></span>
            </p>
            <main className='glr-main'>
                <div className="glr-item" style={styleGlr} onClick={handleOpen1}>
                    <img src={img1} alt="" />
                </div>
                <Modal
                        open={open1}
                        onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        className='modal'
                    >
                        <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}  />
                        </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen2}>
                    <img src={img2} alt=""/>
                </div>
                <Modal
                        open={open2}
                        onClose={handleClose2}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen3}>
                    <img src={img3} alt="" />
                </div>
                <Modal
                        open={open3}
                        onClose={handleClose3}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen4}>
                    <img src={img4} alt="" />
                </div>
                <Modal
                        open={open4}
                        onClose={handleClose4}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen5}>
                    <img src={img5} alt="" />
                </div>
                <Modal
                        open={open5}
                        onClose={handleClose5}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen6}>
                    <img src={img6} alt="" />
                </div>
                <Modal
                        open={open6}
                        onClose={handleClose6}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen7}>
                    <img src={img7} alt="" />
                </div>
                <Modal
                        open={open7}
                        onClose={handleClose7}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen8}>
                    <img src={img8} alt="" />
                </div>
                <Modal
                        open={open8}
                        onClose={handleClose8}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen9}>
                    <img src={img9} alt="" />
                </div>
                <Modal
                        open={open9}
                        onClose={handleClose9}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen10}>
                    <img src={img10} alt="" />
                </div>
                <Modal
                        open={open10}
                        onClose={handleClose10}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen11}>
                    <img src={img11} alt="" />
                </div>
                <Modal
                        open={open11}
                        onClose={handleClose11}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
                <div className="glr-item" style={styleGlr} onClick={handleOpen12}>
                    <img src={img12} alt="" />
                </div>
                <Modal
                        open={open12}
                        onClose={handleClose12}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <nav>
                        <NavigateBefore id='modal-nav' className={modalPrev} onMouseEnter={handlePrevEnter} onMouseLeave={handlePrevLeave} onClick={handlePrevClick}/>
                        <img src={images[img - 1]} alt="" className='modal-img'/>
                        <NavigateNext id='modal-nav' className={modalNext} onMouseEnter={handleNextEnter} onMouseLeave={handleNextLeave} onClick={handleNextClick}/>
                    </nav>
                </Modal>
            </main>
            <nav className="glr-btn">
                <button onClick={handlePrev} className={prev}>prev</button>
                <button onClick={handleNext} className={next}>next</button>
            </nav>
            <nav className='glr-nav'>
                <FiberManualRecord className={one} 
                onClick={dotOne}
                /> <FiberManualRecord className={two} 
                onClick={dotTwo}
                /> <FiberManualRecord className={three} 
                onClick={dotThree}
                />
            </nav>
            <div id="map">

            </div>
        </div>
    )
}
export default Gallery;