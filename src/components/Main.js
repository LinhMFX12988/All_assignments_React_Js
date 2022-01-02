import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./Header";
import LishStaffs from "./ListStaffs";
import StaffDetail from "./DetailStaff";
import Department from "./Department";
import Salary from "./Salary";
import Footer from "./Footer";
import { STAFFS, DEPARTMENTS, ROLE } from "../shared/staffs";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      role: ROLE
    };
  }
  render() {

    const StaffWithId = ({ match }) => 
      <StaffDetail
        staffs={this.state.staffs.filter((staff) => staff.id === parseInt(match.params.id, 10))[0]}
      />

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/staffs" component={() => <LishStaffs dishes={this.state.staffs} />} />
          <Route path="/staffs/:id" component={StaffWithId} />
          <Route path="/department" component={() => <Department departments={this.state.departments} />} />
          <Route path="/salary" component={() => <Salary staffs={this.state.staffs} />} />
          <Redirect to="/staffs" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
