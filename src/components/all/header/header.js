import react, { useState, useEffect } from "react";
import './header.css'
import { Link } from 'react-router-dom'
import { Twitter, Facebook, Instagram, Pinterest, KeyboardArrowDown, }
 from '@material-ui/icons'
import logo from '../../img/logo-header.jpg'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


function Header() {
     window.addEventListener('scroll', fixHeader)
     useEffect(() => {
        window.addEventListener('scroll', fixHeader);
        return () => {
            window.removeEventListener('scroll', fixHeader);
        };
    });
     function fixHeader() {
        const header = document.querySelector('.main-header');
        const hamNav = document.querySelector('.hambuger-nav')
        const scrollTop = window.scrollY;
        scrollTop >= 60 ? header.classList.add('fixed') : header.classList.remove('fixed');
        scrollTop >= 60 ? hamNav.classList.add('fixed') : hamNav.classList.remove('fixed')
     }
     const [anchorElham, setAnchorElham] = useState(null);
     const openham = Boolean(anchorElham);
     const handleClickham = (event) => {
       setAnchorElham(event.currentTarget);
     };
     const handleCloseham = () => {
       setAnchorElham(null);
     };
     const [anchorEl1, setAnchorEl1] = useState(null);
     const open1 = Boolean(anchorEl1);
     const handleClick1 = (event) => {
       setAnchorEl1(event.currentTarget);
     };
     const handleClose1 = () => {
       setAnchorEl1(null);
     };
     const [anchorEl2, setAnchorEl2] = useState(null);
     const open2 = Boolean(anchorEl2);
     const handleClick2 = (event) => {
       setAnchorEl2(event.currentTarget);
     };
     const handleClose2 = () => {
       setAnchorEl2(null);
     };
     const [anchorEl3, setAnchorEl3] = useState(null);
     const open3 = Boolean(anchorEl3);
     const handleClick3 = (event) => {
       setAnchorEl3(event.currentTarget);
     };
     const handleClose3 = () => {
       setAnchorEl3(null);
     };
     const [anchorEl4, setAnchorEl4] = useState(null);
     const open4 = Boolean(anchorEl4);
     const handleClick4 = (event) => {
       setAnchorEl4(event.currentTarget);
     };
     const handleClose4 = () => {
       setAnchorEl4(null);
     };
    //  MAIN HEADER
    const [dropDown1, setDropDown1] = useState(false)
    const [dropDown2, setDropDown2] = useState(false)
    const [dropDown3, setDropDown3] = useState(false)
    const [dropDown4, setDropDown4] = useState(false)
    const [dropDown5, setDropDown5] = useState(false)
    const [hambuger, setHambuger] = useState(true)
    function handleHambuger() {
        setHambuger(!hambuger)
    }
    function toggle1() {
        setDropDown1(!dropDown1)
    }
    function toggle2() {
        setDropDown2(!dropDown2)
    }
    function toggle3() {
        setDropDown3(!dropDown3)
    }
    function toggle4() {
        setDropDown4(!dropDown4)
    }
    function toggle5() {
        setDropDown5(!dropDown5)
    }
    function handleEnter1() {
        setDropDown1(true)
    }
    function handleEnter2() {
        setDropDown2(true)
    }
    function handleEnter3() {
        setDropDown3(true)
    }
    function handleEnter4() {
        setDropDown4(true)
    }
    function handleEnter5() {
        setDropDown5(true)
    }
    function handleLeave1() {
        setDropDown1(false)
    }
    function handleLeave2() {
        setDropDown2(false)
    }
    function handleLeave3() {
        setDropDown3(false)
    }
    function handleLeave4() {
        setDropDown4(false)
    }
    function handleLeave5() {
        setDropDown5(false)
    }
    return(
        <header>
        <div className="group">
            <nav className="hambuger">
            <div>
            <Link to='/eko-hotel/our-hotels'>OUR HOTELS</Link>
            <KeyboardArrowDown
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={openham ? 'true' : undefined}
                onClick={handleClickham}
                className='down'/>
                <Menu
                    id="drop-menu"
                    anchorEl={anchorElham}
                    open={openham}
                    onClose={handleCloseham}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleCloseham} id='drop-item'>
                        <Link to='/eko-hotel/eko-gardens'>
                            EKO GARDENS
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseham} id='drop-item'>
                        <Link to='/eko-hotel/eko-hotels'>
                            EKO HOTEL
                        </Link>
                    </MenuItem>    
                    <MenuItem onClick={handleCloseham} id='drop-item'>
                        <Link to='/eko-hotel/eko-suites'>
                            EKO SUITES
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleCloseham} id='drop-item'>    
                        <Link to='/eko-hotel/eko-signature'>
                            EKO SINATURE
                        </Link>
                    </MenuItem>
                </Menu>
            </div>
            <Link id="special">
                    SPECIAL OFFERS 
            </Link>
            </nav>
            <nav className="groups">
                <Link to='/eko-hotel/eko-gardens'>EKO GARDENS  </Link>
                <KeyboardArrowDown
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open1 ? 'true' : undefined}
                onClick={handleClick1}
                className='down'/>
                <Menu
                    id="drop-menu"
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose1}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose1} id='drop-item'>
                        <Link to='/eko-hotel/superior-room'>
                            EKO GARDEN SUPERIOR
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose1} id='drop-item'>
                        <Link to='/eko-hotel/classic-room'>
                            EKO GARDEN CLASSIC
                        </Link>
                    </MenuItem>
                </Menu> 
                <Link to='/eko-hotel/eko-hotels'>EKO HOTEL </Link>
                <KeyboardArrowDown
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open2 ? 'true' : undefined}
                onClick={handleClick2}
                className='down'/>
                <Menu
                    id="drop-menu"
                    anchorEl={anchorEl2}
                    open={open2}
                    onClose={handleClose2}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose2} id='drop-item'>
                        <Link to='/eko-hotel/classic-superior-room'>
                            EKO CLASSIC SUPERIOR
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose2} id='drop-item'>
                        <Link to='/eko-hotel/atlantic-superior-room'>
                            EKO ATLANTIC SUPERIOR
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose2} id='drop-item'>
                        <Link to='/eko-hotel/classic-suites'>
                            CLASSIC SUITE
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose2} id='drop-item'>
                        <Link to='/eko-hotel/diplomatic-suites'>
                            DIPLOMATIC SUITE
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose2} id='drop-item'>
                        <Link to='/eko-hotel/presidential-suites'>
                            PRESIDENTIAL SUITE
                        </Link>
                    </MenuItem>
                </Menu>
                <Link to='/eko-hotel/eko-suites'>EKO SUITES </Link>
                <KeyboardArrowDown
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open3 ? 'true' : undefined}
                onClick={handleClick3}
                className='down'/>
                <Menu
                    id="drop-menu"
                    anchorEl={anchorEl3}
                    open={open3}
                    onClose={handleClose3}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose3} id='drop-item'>
                        <Link to='/eko-hotel/deluxe-room'>
                            DELUXE ROOM
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose3} id='drop-item'>
                        <Link to='/eko-hotel/studio-suites'>
                            STUDIO SUITE
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose3} id='drop-item'>
                        <Link to='/eko-hotel/executive-suites'>
                            EXECUTIVE SUITE
                        </Link>
                    </MenuItem>
                </Menu> 
                <Link to='/eko-hotel/eko-signature'>EKO SIGNATURE </Link>
                <KeyboardArrowDown
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open4 ? 'true' : undefined}
                onClick={handleClick4}
                className='down'/>
                <Menu
                    id="drop-menu"
                    anchorEl={anchorEl4}
                    open={open4}
                    onClose={handleClose4}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose4} id='drop-item'>
                        <Link to='/eko-hotel/club-suites'>
                            CLUB SUITE
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose4} id='drop-item'>
                        <Link to='/eko-hotel/premium-suites'>
                            PREMIUM SUITE
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose4} id='drop-item'>
                        <Link to='/eko-hotel/signature-suites'>
                            SIGNATURE SUITE
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose4} id='drop-item'>
                        <Link to='/eko-hotel/signature-presidential-suites'>
                            SIGNATURE PRESIDENTIAL SUITE
                        </Link>
                    </MenuItem>
                </Menu> 
            </nav>
            <nav className="socials">
                <Link id="special">
                    SPECIAL OFFERS 
                </Link>
                <a href='http://www.twitter.com/jdavydz'>
                    <Twitter />
                </a>
                <a href='http://www.facebook.com/jdavyds'>
                <Facebook />
                </a>
                <a href='https://www.instagram.com/jdavyds/'>
                <Instagram />
                </a>
                <a href='https://www.pinterest.com/jdavydz'>
                <Pinterest />
                </a>
            </nav>
        </div>
        <div className='main-header'>
            <nav className="services">
            <Dropdown
            id='dropdown'
            onMouseOver={handleEnter1}
            onMouseLeave={handleLeave1}
            isOpen={dropDown1}
            toggle={toggle1}>
            <DropdownToggle id="hover-menu">
                <Link to='/eko-hotel/'>HOME 
                <KeyboardArrowDown/>
                </Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/about-us'>
                        ABOUT US
                    </Link>
                </DropdownItem>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/contact-us'>
                        CONTACT US
                    </Link>
                </DropdownItem >
            </DropdownMenu>
            </Dropdown>
            <Dropdown
            id='dropdown'
            onMouseOver={handleEnter2}
            onMouseLeave={handleLeave2}
            isOpen={dropDown2}
            toggle={toggle2}>
            <DropdownToggle id="hover-menu">
                <Link to='/eko-hotel/dining'>DINING 
                <KeyboardArrowDown/>
                </Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/sky-restaurant'>
                        SKY RESTAURANT
                    </Link>
                </DropdownItem>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/crossroads-restaurant'>
                        CROSSROADS RESTAURANT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/lagos-irish-pub'>
                        LAGOS IRISH PUB
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/88-restaurant'>
                        88 RESTAURANT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/prime-restaurant'>
                        PRIME RESTAURANT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/red-restaurant'>
                        RED RESTAURANT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/kuramo-sports-cafe'>
                        KURAMO SPORTS CAFE
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/lagoon-breeze'>
                        LAGOON BREEZE RESTAURANT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/calabash-bar'>
                        CALABASH BAR 
                    </Link>
                </DropdownItem >
            </DropdownMenu>
            </Dropdown>
            <Dropdown
            id='dropdown'
            onMouseOver={handleEnter3}
            onMouseLeave={handleLeave3}
            isOpen={dropDown3}
            toggle={toggle3}>
            <DropdownToggle id="hover-menu">
                <Link to='/eko-hotel/meetings-and-events'>MEETINGS & EVENTS 
                <KeyboardArrowDown/>
                </Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/grand-ballroom'>
                        GRAND BALL ROOM
                    </Link>
                </DropdownItem>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/eko-convention-center'>
                        EKO CONVENTION CENTER
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/fantasia'>
                        FANTASIA
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/meeting-rooms'>
                        MEETING ROOMS
                    </Link>
                </DropdownItem >
            </DropdownMenu>
            </Dropdown>
            </nav>
            <Link to='/eko-hotel/'> 
            <img src={logo} alt="logo" className='logo'/>
            </Link>
            <nav className='services'>
            <Dropdown
            id='dropdown'
            onMouseOver={handleEnter4}
            onMouseLeave={handleLeave4}
            isOpen={dropDown4}
            toggle={toggle4}>
            <DropdownToggle id="hover-menu">
                <Link to='/eko-hotel/recreational-services'>RECREATIONAL SERVICES  
                <KeyboardArrowDown/>
                </Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/swimming-pool'>
                        SWIMMING POOL
                    </Link>
                </DropdownItem>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/gymnasium'>
                        GYM
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/tennis-court'>
                        TENNIS COURTS
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/spa'>
                        SPA
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/basketball-court'>
                        BASKETBALL COURT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/volleyball-court'>
                        VOLLEYBALL COURT
                    </Link>
                </DropdownItem >
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel/saloon-and-nail-studio'>
                        SALOON & NAIL STUDIO
                    </Link>
                </DropdownItem >
            </DropdownMenu>
            </Dropdown>
            <Dropdown
            id='dropdown'
            onMouseOver={handleEnter5}
            onMouseLeave={handleLeave5}
            isOpen={dropDown5}
            toggle={toggle5}>
            <DropdownToggle id="hover-menu">
                <Link to='/eko-hotel/'>JOURNAL 
                <KeyboardArrowDown/>
                </Link>
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel#'>
                        BLOG
                    </Link>
                </DropdownItem>
                <DropdownItem id='drop-item'>
                    <Link to='/eko-hotel#'>
                        EVENTS
                    </Link>
                </DropdownItem >
            </DropdownMenu>
            </Dropdown>
            <Link to='/eko-hotelgallery'>GALLERY</Link>
            </nav>
            <nav className="hambuger-main">
            <FontAwesomeIcon icon={hambuger ? faBars : faTimes } className='hambuger-icon' onClick={handleHambuger}/>
            </nav>
        </div>
        <nav className={hambuger ? 'hambuger-nav' : 'hambuger-nav active'}>
                <ul>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/'>
                                HOME
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/dining'>
                                DINING
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/meetings-and-events'>
                                MEETINGS & EVENTS
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/recreational-services'>
                                RECREATIONAL SERVICES
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/#'>
                                BLOG
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/gallery'>
                                GALLERY
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/about-us'>
                                ABOUT US
                            </Link>
                    </li>
                    <li id='drop-item'>
                            <Link to='/eko-hotel/contact-us'>
                                CONTACT US
                            </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;