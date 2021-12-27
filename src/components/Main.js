import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import { STAFFS } from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: STAFFS,
    };
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Menu dishes={this.state.dishes} />
        <Footer />
      </div>
    );
  }
}

export default Main;
