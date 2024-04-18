import React, { useState } from 'react';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { AiOutlineGlobal } from 'react-icons/ai';

const Header = () => {
    const currentPath = window.location.pathname;

    return (
        <header className="header">
            <Navbar className="align-items-xl-end" expand="lg">
                <Navbar.Brand href="/"><img src="/img/logo.jpg" alt="logo"/></Navbar.Brand>
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

const NavItem = ({ href, active, children }) => {
    return (
        <Nav.Item className={`fw-bold ${active ? 'active' : ''}`}>
            <Nav.Link href={href} className={`fw-bold ${active ? 'active' : ''}`}>{children}</Nav.Link>
        </Nav.Item>
    );
}

const LanguageDropdown = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Устанавливаем начальный выбранный язык

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        // Здесь можно выполнить дополнительные действия при изменении языка, например, изменить переводы на странице
    };

    return (
        <Dropdown className={'dropdown-language'}>
            <Dropdown.Toggle variant="light" id="dropdown-language" className="nav-link mr-3 fw-bold">
                <img src={`/img/${selectedLanguage}.png`} alt=""/>
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleLanguageChange('en')} className={selectedLanguage === 'English' ? 'active' : ''}>
                    <img src="/img/en.png" alt="English" className="mr-1" /> English
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleLanguageChange('ru')} className={selectedLanguage === 'Spanish' ? 'active' : ''}>
                    <img src="/img/ru.png" alt="Spanish" className="mr-1" /> Russian
                </Dropdown.Item>
                {/* Добавьте другие языки по аналогии */}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Header;
