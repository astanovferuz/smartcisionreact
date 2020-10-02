import React, { Component } from "react";
import { NavItem, Nav, Navbar, NavbarBrand, Button, Form, Collapse, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
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
                     <div className="container pl-2">
                        <NavbarBrand href="/">SmartCision</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />
                                <Collapse isOpen={this.state.isNavOpen} navbar>
                                    <Nav className="mr-auto" navbar>
                                        <NavItem>
                                            <NavLink to="/home" className="nav-link">Home</NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink to="/aboutus" className="nav-link">About</NavLink>
                                        </NavItem>
                                        <UncontrolledDropdown nav inNavbar>
                                            <DropdownToggle nav caret>
                                                App Menu
                                            </DropdownToggle>
                                            <DropdownMenu right>
                                                <DropdownItem>
                                                <NavItem>
                                                    <NavLink to="/demo" className="nav-link">Demo</NavLink>
                                                </NavItem>
                                                </DropdownItem>
                                                <DropdownItem>
                                                <NavItem>
                                                    <NavLink to="/archive" className="nav-link">Archive</NavLink>
                                                </NavItem>
                                                </DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledDropdown>
                                        {/*  */}
                                        <NavItem>
                                            <NavLink to="/contactus" className="nav-link">Contact</NavLink>
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
            </React.Fragment>
        );
    }
}

export default Header;