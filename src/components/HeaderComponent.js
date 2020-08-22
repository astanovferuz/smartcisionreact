import React, { Component } from "react";
import { NavItem, Nav, Navbar, NavbarBrand, NavbarToggle, Collapse, Jumbotron, Button, Form, FormGroup, Input, Label, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component{
    render()    {
        return(
            <React.Fragment>
                 <Navbar color="light" light expand="md">
                     <div className="container">
                        <NavbarBrand>SmartCision</NavbarBrand>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <NavLink to="/home" className="nav-link" activeClassName="active-link">Home</NavLink>
                                </NavItem>
                            </Nav>
                     </div>
                 </Navbar>
                <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col mt-4">
                            <h1 className="text-center">Smart Decisions</h1>
                            <p className="lead text-center">Don't make the same mistake twice. Make smart decisions.</p>
                        </div>
                    </div>
                     <div className="row">
                        <div className="col d-flex justify-content-center">
                            <a href="#first-main-headline" className="btn btn-warning fontBold mt-3 btn-lg btn-yellow">Learn More</a>
                        </div>
                    </div>
                 </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;