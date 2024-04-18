import React from "react";
import {Nav} from "react-bootstrap";

const NavItem = ({ href, active, children }) => {
    return (
        <Nav.Item className={`fw-bold ${active ? 'active' : ''}`}>
            <Nav.Link href={href} className={`fw-bold ${active ? 'active' : ''}`}>{children}</Nav.Link>
        </Nav.Item>
    );
}

export default NavItem;