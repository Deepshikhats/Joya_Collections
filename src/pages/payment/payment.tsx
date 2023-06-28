import { Layout } from "@common";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DownArrow from "@assets/icons/downSign.svg";
import { BreadCrumb, Button } from "@components";
import { useDispatch, useSelector } from "react-redux";
import { setStages } from "@redux/slices/productSlice";

const Payment: React.FC = () => {
  const dispatch = useDispatch();
  const [showPaymentOptions, setPaymentOptions] = useState(true);
  const handleOrderSummary = () => {
    setPaymentOptions(!showPaymentOptions);
  };
  useEffect(() => {
    dispatch(setStages(["CART", "SHIPPING", "PAYMENT"]));
  }, []);

  return (
    <Layout>
      <Container className="hContainer my-5">
        <BreadCrumb />
        <Row className="mt-5">
          <Col lg={6}>
            <div
              className="bg-grey3 d-flex justify-content-between px-5 py-3"
              //   onClick={handleOrderSummary}
            >
              <span>Order Summary</span>
              <img
                src={DownArrow}
                className={!showPaymentOptions ? "rotate" : ""}
              />
            </div>
            <div className="borderC my-3  border">
              <div className="d-flex gap20 align-items-center borderC border-bottom p-3">
                <input type="radio" id="upi" />
                <label htmlFor="upi" className="txt-p1 fs-5">
                  UPI Redirect
                </label>
              </div>
              <div className="d-flex gap20 align-items-center borderC border-bottom p-3">
                <input type="radio" id="card" />
                <label htmlFor="card" className="txt-p1 fs-5">
                  Debit/Credit Card
                </label>
              </div>
            </div>
            <Button
              onClick={() => console.log()}
              type="button"
              className="btnPrimary w-100"
            >
              Place Order
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Payment;
