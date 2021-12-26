import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from "./components/MenuComponent";
import { STAFFS } from "./shared/staffs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: STAFFS,
    };
  }
  render() {
    return (
      <div className="container">
        <Navbar while color="primary">
          <div className="container">
            <NavbarBrand>Ứng dụng quản lý nhân sự v1.0</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
