import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="my-5">
            <Navbar  variant="light">
                <Navbar.Brand to="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                <Nav className="ml-auto">
                    <Link className="nav_Item" to="/home">Home</Link> 
                    <Link className="nav_Item" to="/donation">Donation</Link>
                    <Link className="nav_Item" to="/event">Event</Link>
                    <Link className="nav_Item" to="/Blog">Blog</Link>

                    <Link to="/register"><Button className="btn btn-primary mx-3">Register</Button></Link>
                    <Link to="/admin"><Button className="btn btn-dark">Admin</Button></Link>
                </Nav>
            </Navbar>
            </div>
        </div>
    );
};

export default Header;