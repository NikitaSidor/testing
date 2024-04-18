import React from 'react';

import { Navbar, Nav, Button } from 'react-bootstrap';

import LanguageDropdown from '../dropdawn/LanguageDropdown/LanguageDropdown'
import NavItem from '../navItem/default'

import './Header.css'

const Header = () => {
    const currentPath = window.location.pathname;

    return (
        <header className="header">
            <Navbar className="align-items-xl-end" expand="lg">
                <Navbar.Brand href="/">
                    <img src="/img/logo.jpg" alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="align-items-xl-end" id="basic-navbar-nav">
                    <Nav className="nav-menu mr-auto align-items-xl-end">
                        <NavItem href="#about" active={currentPath === '/about'}>About</NavItem>
                        <NavItem href="#forex" active={currentPath === '/forex'}>Forex Trading</NavItem>
                        <NavItem href="#tools" active={currentPath === '/tools'}>Tools</NavItem>
                        <NavItem href="#partner" active={currentPath === '/'}>Partner With Us</NavItem>
                    </Nav>
                    <Nav className="nav-function align-items-xl-center">
                        <LanguageDropdown />
                        <Button variant="primary" className="mr-2 rounded-pill">Registration</Button>
                        <Button variant="warning" className="mr-2 rounded-pill">Demo Account</Button>
                        <div className="border-right"></div>
                        <Nav.Link className={'fw-bold nav-login'} href="#login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
