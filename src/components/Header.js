import React from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggle, NavItem, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

const Header = () => {


    return(
        <Navbar dark expand='md'>
            <div className="container">
                {/* <NavbarToggle /> */}
                <NavbarBrand className="mr-auto" href="/">
                    <img src="assets/images/logo.png" height={30} width={41} alt="Ristorante Con Fusion" />
                </NavbarBrand>
                <Collapse>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/staffs">
                                <span className="fa fa-users fa-lg"></span>Nhân Viên
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/department">
                                <span className="fa fa-id-card-o fa-lg"></span>Phòng Ban
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/payroll">
                                <span className="fa fa-money fa-lg"></span>Bảng Lương
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </div>
        </Navbar>
    );
}

export default Header;