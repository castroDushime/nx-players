import {Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";
import Logo from '../../assets/logo.png'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {BiMenu} from "react-icons/bi";

export const TopNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const currentUrl = window.location.href;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <Navbar expand={'lg'}
                    className={`tw-fixed tw-top-0 tw-w-full  ${isScrolled ? 'bg-primary ' : 'bg-primary '}`}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Logo} className="tw-h-12" alt="logo"/>
                    </Navbar.Brand>
                    <Navbar.Toggle className="border-white">
                        <BiMenu className="tw-text-white tw-text-2xl"/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="justify-content-center flex-grow-1 pe-3">
                            {
                                currentUrl.includes("game-details") &&
                                <Nav.Link className="tw-text-white tw-font-extrabold tw-text-lg" href="/">Home</Nav.Link>
                            }
                            <Nav.Link className="tw-text-white tw-font-extrabold tw-text-lg" href="#about_us"> About us</Nav.Link>
                            <Nav.Link className="tw-text-white tw-font-extrabold tw-text-lg" href="#games">Our Games</Nav.Link>
                            <Nav.Link className="tw-text-white tw-font-extrabold tw-text-lg" href="#contact_us">Contact us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
