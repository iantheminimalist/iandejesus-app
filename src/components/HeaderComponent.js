import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem, 
    Container } from 'reactstrap';
  import { NavLink } from 'react-router-dom';


export default function Header() {
    const[ isOpen, setIsOpen ] = useState(false);
    const toggle = () => setIsOpen(!isOpen);


    
    return (
        <React.Fragment>
            <Navbar light sticky="top" expand="sm">
                <Container>
                <NavbarBrand className=" d-md-none header-title  rg-head" href="/">IAN DEJESUS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <div className=" d-md-flex d-block w-100 ">
                    <Nav navbar className="mx-auto w-auto justify-content-center align-items-md-center" >
                        <NavItem>
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link navbar-brand mx-2 d-none d-md-inline header-title rg-head" to="/home">IAN DEJESUS</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </NavItem>
                    </Nav>
                    </div>
                </Collapse>
                </Container>
            </Navbar>
        </React.Fragment>
    )
}
