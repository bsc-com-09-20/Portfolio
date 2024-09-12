import logo from '../essets/img/logo.svg'
import navIcon1 from '../essets/img/nav-icon1.svg'
import navIcon2 from '../essets/img/nav-icon2.svg'
import navIcon3 from '../essets/img/nav-icon3.svg'
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap';

export const CustomNavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.addEventListener("scroll", onScroll);

    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
        <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"> 
        <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('home')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink ==='projects' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('home')}>Projects</Nav.Link>
            <Nav.Link href="#testimonies" className={activeLink ==='testimonies' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('home')}>Testmonies</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href=""><img src={navIcon1} alt="facebook logo"/></a>
                <a href=""><img src={navIcon2} alt="instagram logo"/></a>
                <a href=""><img src={navIcon3} alt="instagram logo"/></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Lets connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}