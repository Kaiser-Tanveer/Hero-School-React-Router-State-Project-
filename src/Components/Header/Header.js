import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><h2 className='nav-brand fw-bold'><span className='text-warning'>Hero</span> School</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <nav className='nav-menu ms-auto my-4 my-md-0'>
                        <NavLink to='/home' className={({isActive})=> isActive ? 'isActive' : undefined}>Home</NavLink>
                        <NavLink to='/statistic' className={({isActive})=> isActive ? 'isActive' : undefined}>Statistic</NavLink>
                        <NavLink to='/blog' className={({isActive})=> isActive ? 'isActive' : undefined}>Blog</NavLink>
                    </nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};

export default Header;