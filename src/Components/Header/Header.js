import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

import './Header.css';

const Header = () => {
    return (
        <Navbar className='border-style py-3' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#" className='fst-italic fs-2 fw-bold'><span className='text-warning fs-2'>Lamp Light</span> Analysis</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <CustomLink to={"/"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Home</CustomLink>
                        <CustomLink to={"/about"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Dashboard</CustomLink>
                        <CustomLink to={"/reviews"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Reviews</CustomLink>
                        <CustomLink to={"/blogs"} className="navstyle text-white ms-4 fs-5 text-decoration-none">Blogs</CustomLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;