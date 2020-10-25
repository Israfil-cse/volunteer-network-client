import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="my-5">

                <nav class="navbar navbar-expand-lg navbar-light">
                    <a class="navbar-brand" href="#home"><img className="logo" src={logo} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item active">
                                <Link to="/home" class="nav-link">Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/donation" class="nav-link">Donation</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/event" class="nav-link">Event</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/Blog" class="nav-link">Blog</Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/register"><Button className="btn btn-primary px-4 mr-2 mb-2">Register</Button></Link>
                            </li>
                            <li class="nav-item"><Link to="/admin"><Button className="btn btn-dark px-4"> Admin </Button></Link></li>
                            
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;