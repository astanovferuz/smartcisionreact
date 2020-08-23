import React, { Component } from "react";
import { NavItem, Nav, Navbar, NavbarBrand, Jumbotron, Button, Form, Collapse, NavbarToggler } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component{
    constructor(props)  {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({isNavOpen: !this.state.isNavOpen});
    }

    render()    {
        return(
            <React.Fragment>
                <Navbar color="light" sticky="top" light expand="lg" className="p-0">
                     <div className="container">
                        <NavbarBrand href="/">SmartCision</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink to="/home" className="nav-link">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#" className="nav-link">About</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#" className="nav-link">Demo</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="#" className="nav-link">Contact</NavLink>
                                        </NavItem>
                                    </Nav>
                                    <Form className="form-inline ml-lg-2 my-lg-0">
                                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <Button color="success" outline className="my-2" type="submit">Search</Button>
                                    </Form>
                                    <span>
                                        <button className="ml-lg-4 a-button" href="#">Login</button>
                                        <button className="ml-lg-3 a-button" href="#">Sign Up</button>
                                    </span>
                                </Collapse>
                    </div>
                </Navbar>
                <Jumbotron fluid>
                <div className="container">
                    <div className="row">
                        <div className="col mt-4">
                            <h1 className="text-center">Smart Decisions</h1>
                            <p className="text-center">Don't make the same mistake twice. Make smart decisions.</p>
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