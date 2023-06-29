import { Layout, OrderSummary } from "@common";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Input, Button } from "@components";
import { useNavigate } from "react-router-dom";

const CartList: React.FC = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState({ label: "1", value: 1 });
  const [total, setTotal] = useState(0);

  return (
    <Layout>
      <Container className="hContainer px-lg-5 my-5 px-3">
        <Row className="justify-content-between mb-5">
          <Col xs={12} lg={6}>
            <OrderSummary show={true} getTotalPrice={setTotal} />
          </Col>
          <Col xs={12} lg={5} className="pt-lg-0 pt-5">
            <div className="d-flex">
              <Input placeholder="Enter a promo code" />
              <Button
                type="button"
                onClick={() => console.log("clicked")}
                className="btnSecondary ms-2"
              >
                Apply
              </Button>
            </div>
            <div className="border-top border-bottom  txt-p2 fw-semibold mb-3 mt-5 py-4">
              <div className="d-flex justify-content-between">
                <span>Extra 10% off</span>
                <span>Rs 199</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Total</span>
                <span>Rs {total}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Shipping Cost</span>
                <span>Rs 599</span>
              </div>
            </div>
            <div className="fs-4 d-flex justify-content-between fw-semibold txt-p2">
              <p>
                Grand Total <span className="fw-light fs-6">Includes GST</span>
              </p>
              <span>Rs {total + 599 - 199}</span>
            </div>
            <Button
              className="btnPrimary w-100"
              type="button"
              onClick={() => navigate("/checkout")}
            >
              CHECKOUT
            </Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CartList;
