import React from "react";
import { Card, Breadcrumb, BreadcrumbItem, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

function Salary(props) {

    const salary = props.staffs.map((staff) =>
        <div key={staff.id} className="col-12 col-md-6 col-lg-4">
            <Card className="text-center"
                    style={{
                        backgroundColor: "#e6dff5",
                        border: "1px solid rgb(112, 112, 112)"
                    }}>
                    <h2> {staff.name}</h2><hr />
                    <CardBody>
                        <CardText>Mã nhân viên: {staff.id}</CardText>
                        <CardText>Hệ số lương: 1</CardText>
                        <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                    <CardBody >
                        <Card style={{
                            border: "1px solid rgb(112, 112, 112)"
                        }}>
                            <CardTitle>
                                Lương: {3000000 + staff.overTime*200000} đ
                            </CardTitle>
                        </Card>
                    </CardBody>
                </Card>
        </div>
    );

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/staffs">Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h1 className="text-center">Phòng Ban</h1>
                <hr />
                <div className="row">{salary}</div>
                <hr />
            </div>
        </div>
    );

}

export default Salary;