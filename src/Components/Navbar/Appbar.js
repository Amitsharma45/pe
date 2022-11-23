/* eslint-disable jsx-a11y/alt-text */
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png"
import './Appbar.css'
function Appbar() {
    return (
        <>

            <Navbar collapseOnSelect expand="md" bg="primary" variant="dark" style={{ fontSize: '16px' }} fixed="top" >
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Navbar.Brand href="#home" id="logo">
                        <img
                            alt=""
                            src={logo}
                            width="40"
                            height="35"
                            className="d-inline-block align-top"
                        />{' '}
                        <span style={{ marginLeft: '10px', fontSize: '22px' }}>Preeti Enterprise</span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" >
                    <Nav className="me-auto resp" >
                        <Link to="/product" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#product" style={{ color: 'white' }}>Our Product</Nav.Link>
                        </Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}>
                            <Nav.Link href="#about" style={{ color: 'white' }}>About Us</Nav.Link>
                        </Link>
                        <Nav.Link href="#contact" style={{ color: 'white' }}>Contact Us</Nav.Link>
                    </Nav>
                    <Nav className='resp' style={{ paddingRight: '10px' }}>
                        <Nav.Link eventKey={2} href="https://api.whatsapp.com/send?phone=919634870380&text=Hello%20World" target="_blank" style={{ color: 'white' }}>
                            <img src='https://cdn-icons-png.flaticon.com/512/4782/4782351.png' id='whatsapp' /> &nbsp;whatsapp
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="tel:963-487-0380" style={{ color: 'white' }}>
                            <img src='https://cdn-icons-png.flaticon.com/512/3014/3014736.png' id='whatsapp' /> &nbsp;+91-9634870380
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div style={{ height: '55px' }}></div>
        </>
    )
}

export default Appbar