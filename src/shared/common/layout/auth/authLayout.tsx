import React, { ChangeEvent, useRef, useState } from "react";
import "./auth.scss";
import Logo from "@assets/images/logo-transparent-png.png";
import { Layout } from "@common";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@components";
import { RoundLoader } from "@utils";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "src/redux/store/store";
import { setOtp } from "@redux/slices/authSlice";
interface propsTypes {
  children: React.ReactNode;
}
const AuthLayout: React.FC<propsTypes> = (props) => {
  return (
    <Layout>
      <Container className="logo_wrap mt-5 p-0">
        <Row className="w-100 h-100 m-0">
          <Col
            lg={6}
            md={12}
            className="d-flex justify-content-center align-items-center logoC"
          >
            <img src={Logo} className="logo" alt="logo" />
          </Col>
          <Col
            lg={6}
            md={12}
            className="position-relative d-flex flex-column px-4 py-5"
          >
            {props.children}
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default AuthLayout;
