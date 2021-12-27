import React, { useState } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    
    return(
        <Navbar dark expand='md'>
            <div className="container">
                <NavbarToggler onClick={toggle} />
                <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/logo.png" height={30} width={41} alt="Ristorante Con Fusion" />
                </NavbarBrand>
                <Collapse 
                    isOpen={isOpen} 
                    onClick={() => {
                        if (isOpen === true) {
                            toggle();
                        }
                    }} 
                    navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/staffs">
                                <span className="fa fa-users fa-lg"></span> Nhân Viên
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/department">
                                <span className="fa fa-id-card-o fa-lg"></span> Phòng Ban
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/salary">
                                <span className="fa fa-money fa-lg"></span> Bảng Lương
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Header;

