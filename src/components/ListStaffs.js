import React from "react";
import { Card, CardTitle, CardImg } from "reactstrap";
import { Link } from "react-router-dom";

function LishStaffs(props) {

  const nhanvien = props.dishes.map((staffs) => {
    return (
      <div key={staffs.id} className="col-6 col-md-4 col-xl-2">
        <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
          <Link to={`/staffs/${staffs.id}`}>
            <CardImg src={staffs.image} />
            <CardTitle
              className="text-center"
              style={{ color: "black", fontSize: "90%" }}
            >
              {staffs.name}
            </CardTitle>
          </Link>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <br />
      <div className="row">{nhanvien}</div>
    </div>
  );

}

export default LishStaffs;
