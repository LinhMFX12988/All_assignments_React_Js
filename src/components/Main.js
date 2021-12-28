import React, { Component } from "react";
import Header from "./Header";
import LishStaffs from "./ListStaffs";
import StaffDetail from "./DetailStaff";
import Footer from "./Footer";
import { STAFFS, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: STAFFS,
      departments: DEPARTMENTS,
    };
  }
  render() {

    const StaffWithId = ({ match }) => 
      <StaffDetail
        staffs={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]}
      />

    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <LishStaffs dishes={this.state.dishes} />} />
          <Route path="/staffs/:id" component={StaffWithId} />
          {/* <Redirect to="/staffs" /> */}
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
