import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <Navbar className='border-style py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#" className='fst-italic fs-2 fw-bold'><span className='text-warning fs-2'>Lamp Light</span> Analysis</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-center">
                        <Link to={"/"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Home</Link>
                        <Link to={"/dashboard"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Dashboard</Link>
                        <Link to={"/reviews"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Reviews</Link>
                        <Link to={"/blogs"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Blogs</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;