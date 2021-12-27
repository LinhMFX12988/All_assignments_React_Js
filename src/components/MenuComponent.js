import React, { useState } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";
import dateFormat from "dateformat";

function Menu(props) {

  const [dishSelect, setDishSelect] = useState('Bấm vào tên nhân viên để xem thông tin')

  const renderDish = (staffs) => {
      return (
        <CardBody>
          <h3>{"Họ và tên: " + staffs.name}</h3>
          <CardText>
            {"Ngày sinh: " + dateFormat(staffs.doB, "dd/mm/yyyy")}
          </CardText>
          <CardText>
            {"Ngày vào công ty: " + dateFormat(staffs.startDate, "dd/mm/yyyy")}
          </CardText>
          <CardText>{"Phòng ban: " + staffs.department.name}</CardText>
          <CardText>{"Số ngày nghỉ còn lại: " + staffs.annualLeave}</CardText>
          <CardText>{"Số ngày đã làm thêm: " + staffs.overTime}</CardText>
        </CardBody>
      );
  }
  
    const menu = props.dishes.map((staffs) => {
      return (
        <div key={staffs.id} className="col- col-md-6 col-xl-4">
          <Card onClick={setDishSelect}>
            <CardTitle>{staffs.name}</CardTitle>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div className="col-12 col-md-12 col-xl-12">
            {dishSelect}
          </div>
        </div>
      </div>
    );
  
}

export default Menu;
