import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">home</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <a target="#code">Projects</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a target="#about">About</a>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <a target="#contact">Contact</a>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}