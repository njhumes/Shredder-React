import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            dropdownOpen: false
        }
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <header>
                <Nav tabs id='heading-navbar'>
                    <NavItem>
                        <NavLink className='header-links' tag={Link} to='/'>Home</NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='header-links' tag={Link} to='/user'>Profile</NavLink>
                    </NavItem>

                </Nav>

            </header>
        )

    }
    
}
export default Header;